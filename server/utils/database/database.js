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
    createUser: createUser = async ({cpf,nome,email,senha}) => {
        const res = await new Promise((resolve, reject) => {
            bcrypt.genSalt(Number(String(process.env.SALT_ROUNDS)), (err,salt) => {
                if (err) resolve(err)
                bcrypt.hash(senha, salt, (err_, hash) => {
                    if (err_) resolve(err_)

                    con.query(`INSERT INTO usuarios VALUES ("${cpf}","${nome}","${email}","${hash}");`, (err,result) => {
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
    loginUser: loginUser = async ({cpf,senha}) => {
        const res = await new Promise((resolve, reject) => {
            con.query(`SELECT * FROM usuarios WHERE usuarios.cpf = "${cpf}";`, async (err,result,fields) => {
                if(result[0] === undefined) resolve({"message":"Falha na autenticacao!","status":200})
                if(await bcrypt.compare(senha,result[0].senha)) {
                    const token = createToken(result[0].cpf,result[0].nome)
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
                con.query(`SELECT * FROM usuarios WHERE usuarios.cpf = "${res.user.cpf}";`, async (err,result,fields) => {
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
        if(user.cpf === res.user.cpf) {
            res = await new Promise((resolve,reject) => {
                con.query(`INSERT INTO contas VALUES (DEFAULT,"${account.title}","${account.description}","${user.cpf}");`, async (err,result,field) => {
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
    getAccounts: getAccounts = async({id,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(id === res.user.cpf) {
            res = await new Promise((resolve,reject) => {
                con.query(`SELECT * FROM contas WHERE contas.usuario_cpf = "${id}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Busca feita com sucesso!","status":200,"accounts":result})
                })
            })
        }
        return res
    },
    newTransaction: newTransaction = async({account,transaction,user,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(user.cpf === res.user.cpf) {
            res = await new Promise((resolve,reject) => {
                con.query(`INSERT INTO transacoes VALUES (DEFAULT,"${user.cpf}","${account.id}","${transaction.title}","${transaction.description}","${transaction.model}","${transaction.type}","${transaction.value}","${transaction.date}");`, async (err,result,field) => {
                    if(result === undefined) {
                        resolve({"message":"Erro na criacao!","status":200})
                    } else {
                        con.query(`SELECT * FROM transacoes WHERE transacoes.id = ${result.insertId}`, async (err,result,field) => {
                            if(result[0] === undefined) resolve({"message":"Falha na busca! (apos a cricao)","status":200})
                            resolve({"message":"Transacao criada com sucesso!","status":200,"account":result[0]})
                        })
                    }
                })
            })
        }
        return res
    },
    getTransactions: getTransactions = async({cpf,account_id,token}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(cpf === res.user.cpf) {
            res = await new Promise((resolve,reject) => {
                con.query(`SELECT * FROM transacoes WHERE transacoes.usuario_cpf = "${cpf}" AND transacoes.conta_id = "${account_id}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Busca feita com sucesso!","status":200,"transactions":result})
                })
            })
        }
        return res
    },
    deleteTransaction: deleteTransaction = async({id,token,cpf}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(cpf === res.user.cpf) {
            res = await new Promise((resolve,reject) => {
                con.query(`DELETE FROM transacoes WHERE transacoes.id = "${id}" AND transacoes.usuario_cpf = "${cpf}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Delete feito com sucesso!","status":200})
                })
            })
        }
        return res
    },
    deleteAccount: deleteAccount = async({id,token,cpf}) => {
        var res = await verifyToken(token)
        if(res.user === undefined) {
            return res
        } else if(cpf === res.user.cpf) {
            res = await new Promise((resolve,reject) => {
                con.query(`DELETE FROM transacoes WHERE transacoes.conta_id = "${id}" AND transacoes.usuario_cpf = "${cpf}";`, async (err,result,fields) => {
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    con.query(`DELETE FROM contas WHERE contas.id = "${id}" AND contas.usuario_cpf = "${cpf}";`, async (err,result,fields) => {
                        if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                        resolve({"message":"Delete feito com sucesso!","status":200})
                    })
                })
            })
        }
        return res
    }
}

module.exports = databaseFunctions