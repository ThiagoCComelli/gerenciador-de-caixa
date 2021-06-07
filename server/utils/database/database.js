const mysql = require('mysql')
const bcrypt = require('bcrypt')
const {createToken, verifyToken} = require('../auth/jwt')

const con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: "gerenciador_de_caixa"
})

const databaseFunctions = {
    createUser: createUser = async ({nome,email,senha}) => {
        const res = await new Promise((resolve, reject) => {
            bcrypt.genSalt(Number(String(process.env.SALT_ROUNDS)), (err,salt) => {
                if (err) resolve(err)
                bcrypt.hash(senha, salt, (err_, hash) => {
                    if (err_) resolve(err_)

                    con.query(`INSERT INTO usuarios VALUES (NULL,"${nome}","${email}","${hash}");`, (err,result) => {
                        if(result === undefined) {
                            resolve({"message":"Usuario ja cadastrado!","status":200})
                        } else {
                            resolve({"message":"Usuario criado com sucesso!","status":200})
                        }
                    })
                })
            })
        })
        return res
    },
    loginUser: loginUser = async ({email,senha}) => {
        const res = await new Promise((resolve, reject) => {
            con.query(`SELECT * FROM usuarios WHERE usuarios.email = "${email}";`, async (err,result,fields) => {
                if(result[0] === undefined) resolve({"message":"Falha na autenticacao!","status":200})
                if(await bcrypt.compare(senha,result[0].senha)) {
                    const token = createToken(result[0].email,result[0].nome)
                    delete result[0]["senha"]
                    resolve({"message":"Usuario logado com sucesso!","status":200,"token":token,"user":result[0]})
                } else {
                    resolve({"message":"Falha na autenticacao!","status":200})
                }
            })
        })
        
        return res
    },
    verifyUser: verifyUser = async({token}) => {
        const res = await verifyToken(token)
        if(res.user) {
            res.user = await new Promise((resolve,reject) => {
                con.query(`SELECT * FROM usuarios WHERE usuarios.email = "${res.user.email}";`, async (err,result,fields) => {
                    if(result[0] === undefined) resolve({"message":"Falha na busca!","status":200})
                    delete result[0]["senha"]
                    resolve(result[0])
                })
            })
            
        }
        return res
    },
    newAccount: newAccount = async({user,account,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } 
        if(user.email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`INSERT INTO contas VALUES (DEFAULT,"${account.title}","${account.description}","${user.email}");`, async (err,result,field) => {
                    if(result === undefined) {
                        resolve({"message":"Erro na criacao!","status":200})
                    } else {
                        con.query(`SELECT * FROM contas WHERE contas.id = ${result.insertId}`, async (err,result,field) => {
                            if(result[0] === undefined) resolve({"message":"Falha na busca! (apos a cricao)","status":200})
                            resolve({"message":"Conta criada com sucesso!","status":200,"account":result[0]})
                        })
                    }
                })
            })
        } 
        return res
    },
    getAccounts: getAccounts = async({email,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`SELECT * FROM contas WHERE contas.usuario_email = "${email}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Busca feita com sucesso!","status":200,"accounts":result})
                })
            })
        }
        return res
    },
    getTags: getTags = async (id) => {
        var res = await new Promise((resolve,reject) => {
            con.query(`SELECT * FROM tags WHERE transacao_id = ${id};`, (err,result,fields) => {
                resolve(result)
            })
        })
        return res
    },
    deleteTags: deleteTags = async (id) => {
        var res = await new Promise((resolve,reject) => {
            con.query(`DELETE FROM tags WHERE transacao_id = ${id};`, async (err,result,field) => {
                if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                resolve({"message":"Delete feito com sucesso!","status":200})
            })
        })
        return res
    },
    deleteTag: deleteTag = async ({id,email,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`DELETE FROM tags WHERE tags.id = "${id}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Delete feito com sucesso!","status":200,"tag":{id:id}})
                })
            })
        }
        
        return res
    },
    newTag: newTag = async ({token,user,tag,transaction}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(user.email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`INSERT INTO tags VALUES (DEFAULT, "${tag.titulo}","${transaction.id}","${transaction.conta_id}");`, async (err,result,field) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Insert feito com sucesso!","status":200,"tag":{id:result.insertId,titulo:tag.titulo,transacao_id:transaction.id,conta_id:transaction.conta_id}})
                })
            })
        }
        
        return res
    },
    newTransaction: newTransaction = async({account,transaction,user,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(user.email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`INSERT INTO transacoes VALUES (DEFAULT,"${user.email}","${account.id}","${transaction.title}","${transaction.description}","${transaction.model}","${transaction.type}","${transaction.value}","${transaction.date}");`, async (err,result,field) => {
                    if(result === undefined) {
                        resolve({"message":"Erro na criacao!","status":200})
                    } else {
                        transaction.tags.map((tag) => {
                            con.query(`INSERT INTO tags VALUES (DEFAULT, "${tag.titulo}", "${result.insertId}","${account.id}")`, async (err,result,fields) => {
                                if(result === undefined) {
                                    resolve({"message":"Erro na criacao!","status":200})
                                }
                            })
                        })
                        con.query(`SELECT * FROM transacoes WHERE transacoes.id = ${result.insertId}`, async (err,result,field) => {
                            if(result[0] === undefined) resolve({"message":"Falha na busca! (apos a cricao)","status":200})

                            const result_ = async () => {
                                return Promise.all(result.map(async(item) => {
                                    item.tags = await getTags(item.id)
                                }))
                            }
        
                            result_().then(() => {
                                resolve({"message":"Transacao criada com sucesso!","status":200,"account":result[0]})
                            })
                        })
                    }
                })
            })
        }
        return res
    },
    getTransactions: getTransactions = async({email,account_id,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`SELECT * FROM transacoes WHERE transacoes.usuario_email = "${email}" AND transacoes.conta_id = "${account_id}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                                        
                    const result_ = async () => {
                        return Promise.all(result.map(async(item) => item.tags = await getTags(item.id)))
                    }

                    result_().then(() => {
                        resolve({"message":"Busca feita com sucesso!","status":200,"transactions":result})
                    })
                })
            })
        }
        return res
    },
    deleteTransaction: deleteTransaction = async({id,token,email}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(email === res.user.email) {
            await deleteTags(id)
            res = await new Promise((resolve,reject) => {
                con.query(`DELETE FROM transacoes WHERE transacoes.id = "${id}" AND transacoes.usuario_email = "${email}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Delete feito com sucesso!","status":200})
                })
            })
        }
        return res
    },
    updateTransaction: updateTransaction = async({token,user,transaction}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(user.email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`UPDATE transacoes SET descricao="${transaction.descricao}", titulo="${transaction.titulo}", modalidade="${transaction.modalidade}", tipo="${transaction.tipo}", valor="${transaction.valor}" WHERE id="${transaction.id}" AND usuario_email="${user.email}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Update feito com sucesso!","status":200})
                })
            })
        }
        return res
    },
    deleteAccount: deleteAccount = async({id,token,email}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(email === res.user.email) {
            res = await new Promise((resolve,reject) => {
                con.query(`DELETE FROM tags WHERE tags.conta_id = "${id}";`, (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha no delete!","status":200})
                    con.query(`DELETE FROM transacoes WHERE transacoes.conta_id = "${id}";`, async (err,result,fields) => {
                        if(result === undefined) resolve({"message":"Falha no delete","status":200})
                        con.query(`DELETE FROM contas WHERE contas.id = "${id}";`, async (err,result,fields) => {
                            if(result === undefined) resolve({"message":"Falha no delete","status":200})
                            resolve({"message":"Delete feito com sucesso!","status":200})
                        })
                    })
                })
            })
        }
        return res
    }
}

module.exports = databaseFunctions