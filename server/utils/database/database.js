const mysql = require('mysql')
const bcrypt = require('bcrypt')
const codes = require('../codes.json')
const {createToken, getToken} = require('../auth/jwt')

const con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: "gerenciador_de_caixa"
})

const databaseFunctions = {
    createUser: createUser = async ({name,email,password}) => {
        const res = await new Promise((resolve, reject) => {
            bcrypt.genSalt(Number(String(process.env.SALT_ROUNDS)), (err,salt) => {
                if (err) resolve(err)
                bcrypt.hash(password, salt, (err_, hash) => {
                    if (err_) resolve(err_)

                    con.query(`INSERT INTO users VALUES (NULL,"${name}","${email}","${hash}");`, (err,result) => {
                        if(result === undefined) {
                            console.log(err)
                            resolve({"status":codes.NEW_USER_ERROR})
                        } else {
                            resolve({"status":codes.NEW_USER_SUCCESS})
                        }
                    })
                })
            })
        })
        return res
    },
    loginUser: loginUser = async ({email,password}) => {
        const res = await new Promise((resolve, reject) => {
            con.query(`SELECT * FROM users WHERE users.email = "${email}";`, async (err,result,fields) => {
                if(result[0] === undefined) resolve({"status":codes.LOGIN_ERROR})
                else if(await bcrypt.compare(password,result[0].password)) {
                    const token = createToken(result[0].email,result[0].name)
                    delete result[0]["password"]
                    resolve({"status":codes.LOGIN_SUCCESS ,"user":result[0],"token":token})
                } else {
                    resolve({"status":codes.LOGIN_ERROR})
                }
            })
        })
        
        return res
    },
    verifyUser: verifyUser = async(token) => {
        res = await new Promise((resolve,reject) => {
            const user = getToken(token)
            con.query(`SELECT * FROM users WHERE users.email = "${user.email}";`, async (err,result,fields) => {
                if(result[0] === undefined) resolve({"status":codes.TOKEN_ERROR})
                else {
                    delete result[0]["password"]
                    resolve({status:codes.TOKEN_SUCCESS,user:result[0]})
                }
            })
        })
        return res
    },
    newAccount: newAccount = async({user,account}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`INSERT INTO accounts VALUES (DEFAULT,"${account.title}","${account.description}","${user.email}");`, async (err,result,field) => {
                if(result === undefined) {
                    resolve({"status":codes.NEW_ACCOUNT_ERROR})
                } else {
                    con.query(`SELECT * FROM accounts WHERE accounts.id = ${result.insertId}`, async (err,result,field) => {
                        if(result[0] === undefined) resolve({"status":codes.NEW_ACCOUNT_ERROR})
                        else resolve({"status":codes.NEW_ACCOUNT_SUCCESS,"account":result[0]})
                    })
                }
            })
        })
        return res
    },
    getAccounts: getAccounts = async(email) => {
        res = await new Promise((resolve,reject) => {
            con.query(`SELECT * FROM accounts WHERE user_email = "${email}";`, async (err,result,fields) => {
                if(result === undefined) resolve({"status": codes.SERVER_ERROR})
                else resolve({"status":codes.GET_ACCOUNTS_SUCCESS,"accounts":result})
            })
        })
        return res
    },
    getAccount: getAccount = async({email,id}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`SELECT * FROM accounts,` + 
                      `(SELECT COUNT(*) AS total_transactions FROM transactions WHERE transactions.account_id="${id}" AND transactions.user_email="${email}") AS x,` +
                      `(SELECT IFNULL(SUM(CASE WHEN type="Entrada" THEN value ELSE - value END),0) AS total_money FROM transactions WHERE transactions.account_id="${id}" AND transactions.user_email="${email}") as y WHERE id="${id}";`, async (err,result,fields) => { 
                if(result === undefined) resolve({"status": codes.SERVER_ERROR})
                else resolve({"status":codes.GET_ACCOUNTS_SUCCESS,"accounts":result})
            })
        })
        return res
    },
    getAccountsDetails: getAccountsDetails = async({email}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`SELECT COUNT(*) AS total_transactions, IFNULL(SUM(CASE WHEN type="Entrada" THEN value ELSE - value END),0) AS total_money FROM transactions WHERE user_email="${email}";`, async (err,result,fields) => {
                if(result === undefined) resolve({"status": codes.SERVER_ERROR})
                else resolve({"status":codes.GET_ACCOUNTS_DETAILS_SUCCESS,"accounts":result})
            })
        })
        return res
    },
    getAccountStats: getAccountStats = async({id,email}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`SELECT t.date,
                            FORMAT(t.rental_count,2) AS month_total,
                            FORMAT(@running_total:=@running_total + t.rental_count,2) AS cumulative_sum
                        FROM
                            ( SELECT
                                DATE_FORMAT(date,'%m-%Y') as date,
                                IFNULL(SUM(CASE WHEN type="Entrada" THEN value ELSE - value END),0) as rental_count
                                FROM transactions WHERE account_id = ${id} AND user_email = "${email}"
                                GROUP BY DATE_FORMAT(date,'%m-%Y')
                                ORDER BY MIN(date)
                            ) t JOIN (SELECT @running_total:=0) r;`, (err,result,fields) => {
                if(result === undefined) resolve({"status":codes.GET_ACCOUNT_STATS_ERROR})
                else resolve({"status":codes.GET_ACCOUNT_STATS_SUCCESS,"data":result})
            })
        })
        return res
    },
    getTags: getTags = async (id) => {
        var res = await new Promise((resolve,reject) => {
            con.query(`SELECT * FROM tags WHERE transaction_id = ${id};`, (err,result,fields) => {
                resolve(result)
            })
        })
        return res
    },
    deleteTags: deleteTags = async (id) => {
        var res = await new Promise((resolve,reject) => {
            con.query(`DELETE FROM tags WHERE transaction_id = ${id};`, async (err,result,field) => {
                if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                resolve({"message":"Delete feito com sucesso!","status":200})
            })
        })
        return res
    },
    deleteTag: deleteTag = async ({id,email}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`DELETE tags FROM tags
                            INNER JOIN transactions ON transactions.id = tags.transaction_id 
                            WHERE transactions.user_email = "${email}" AND tags.id = ${id};`, async (err,result,fields) => {
                if(result === undefined) resolve({"status":codes.DELETE_TAG_ERROR})
                else resolve({"status":codes.DELETE_TAG_SUCCESS,"tag":{id:id}})
            })
        })
        return res
    },
    newTag: newTag = async ({tag,transaction}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`INSERT INTO tags VALUES (DEFAULT, "${tag.title}","${transaction.id}");`, async (err,result,field) => {
                if(result === undefined) resolve({"status":codes.NEW_TAG_ERROR})
                else resolve({"status":codes.NEW_TAG_SUCCESS,"tag":{id:result.insertId,title:tag.title,transaction_id:transaction.id}})
            })
        })
        return res
    },
    newTransaction: newTransaction = async({account,transaction,user}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`INSERT INTO transactions VALUES (DEFAULT,"${user.email}","${account.id}","${transaction.title}","${transaction.description}","${transaction.modality}","${transaction.type}","${transaction.value}","${transaction.date}");`, async (err,result,field) => {
                if(result === undefined) {
                    resolve({"status":codes.NEW_TRANSACTION_ERROR})
                } else {
                    transaction.tags.map((tag) => {
                        con.query(`INSERT INTO tags VALUES (DEFAULT, "${tag.title}", "${result.insertId}","${account.id}")`, async (err,result,fields) => {
                            if(result === undefined) {
                                resolve({"status":codes.NEW_TRANSACTION_ERROR})
                            }
                        })
                    })
                    con.query(`SELECT * FROM transactions WHERE transactions.id = ${result.insertId}`, async (err,result,field) => {
                        if(result[0] === undefined) resolve({"status":codes.NEW_TRANSACTION_ERROR})
                        else {
                            const result_ = async () => {
                                return Promise.all(result.map(async(item) => {
                                    item.tags = await getTags(item.id)
                                }))
                            }
        
                            result_().then(() => {
                                resolve({"status":codes.NEW_TRANSACTION_SUCCESS,"account":result[0]})
                            })
                        }
                    })
                }
            })
        })
        return res
    },
    getTransactions: getTransactions = async({email,account_id,pagination}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`SELECT * FROM transactions WHERE transactions.user_email = "${email}" AND transactions.account_id = "${account_id}" ORDER BY date DESC, id DESC LIMIT ${25*(pagination-1)},25;`, async (err,result,fields) => {
                if(result === undefined) resolve({"status":codes.GET_TRANSACTIONS_ERROR})
                else {
                    const result_ = async () => {
                        return Promise.all(result.map(async(item) => item.tags = await getTags(item.id)))
                    }

                    result_().then(() => {
                        resolve({"status":codes.GET_TRANSACTIONS_SUCCESS,"transactions":result})
                    })
                }
            })
        })
        return res
    },
    deleteTransaction: deleteTransaction = async({id,email}) => {
        await deleteTags(id)
        res = await new Promise((resolve,reject) => {
            con.query(`DELETE FROM transactions WHERE transactions.id = "${id}" AND transactions.user_email = "${email}";`, async (err,result,fields) => {
                if(result === undefined) resolve({"status":codes.DELETE_TRANSACTION_ERROR})
                else resolve({"status":codes.DELETE_TRANSACTION_SUCCESS})
            })
        })
        return res
    },
    updateTransaction: updateTransaction = async({user,transaction}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`UPDATE transactions SET description="${transaction.description}", title="${transaction.title}", modality="${transaction.modality}", type="${transaction.type}", value="${transaction.value}" WHERE id="${transaction.id}" AND user_email="${user.email}";`, async (err,result,fields) => {
                if(result === undefined) resolve({"status":codes.EDIT_TRANSACTION_ERROR})
                else resolve({"status":codes.EDIT_TRANSACTION_SUCCESS})
            })
        })
        return res
    },
    deleteAccount: deleteAccount = async({id,email}) => {
        res = await new Promise((resolve,reject) => {
            con.query(`DELETE FROM accounts WHERE id="${id}" AND user_email="${email}";`, (err,result,fields) => {
                if(result === undefined) resolve({"status":codes.DELETE_ACCOUNT_ERROR})
                else resolve({"status":codes.DELETE_ACCOUNT_SUCCESS})
            })
        })
        return res
    }
    
}

module.exports = databaseFunctions