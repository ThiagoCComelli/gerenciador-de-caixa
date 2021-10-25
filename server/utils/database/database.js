const mysql = require('./databasePool').pool
const bcrypt = require('bcrypt')
const codes = require('../codes.json')
const {createToken, getToken} = require('../auth/jwt')

const databaseFunctions = {
    createUser: createUser = async ({name,email,password}) => {
        const res = await new Promise((resolve, reject) => {
            bcrypt.genSalt(Number(String(process.env.SALT_ROUNDS)), (err,salt) => {
                if (err) resolve(err)
                bcrypt.hash(password, salt, (err_, hash) => {
                    if (err_) resolve(err_)
                    mysql.getConnection((error, conn) => {
                        conn.query(`INSERT INTO users VALUES (NULL,"${name}","${email}","${hash}");`, (err,result) => {
                            conn.release()
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
        })
        return res
    },
    loginUser: loginUser = async ({email,password}) => {
        const res = await new Promise((resolve, reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM users WHERE users.email = "${email}";`, async (err,result,fields) => {
                    conn.release()
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
            
        })
        
        return res
    },
    verifyUser: verifyUser = async(token) => {
        res = await new Promise((resolve,reject) => {
            const user = getToken(token)
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM users WHERE users.email = "${user.email}";`, async (err,result,fields) => {
                    conn.release()
                    if(result[0] === undefined) resolve({"status":codes.TOKEN_ERROR})
                    else {
                        delete result[0]["password"]
                        resolve({status:codes.TOKEN_SUCCESS,user:result[0]})
                    }
                })
            })
            
        })
        return res
    },
    newAccount: newAccount = async({user,account}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`INSERT INTO accounts VALUES (DEFAULT,"${account.title}","${account.description}","${user.email}");`, async (err,result,field) => {
                    if(result === undefined) {
                        conn.release()
                        resolve({"status":codes.NEW_ACCOUNT_ERROR})
                    } else {
                        conn.query(`INSERT INTO annotationsArticles VALUES (${result.insertId},"")`, async (err, result, field) => {
                            
                        })
                        conn.query(`SELECT * FROM accounts WHERE accounts.id = ${result.insertId}`, async (err,result,field) => {
                            conn.release()
                            if(result[0] === undefined) resolve({"status":codes.NEW_ACCOUNT_ERROR})
                            else resolve({"status":codes.NEW_ACCOUNT_SUCCESS,"account":result[0]})
                        })
                    }
                })
            })
            
        })
        return res
    },
    getAccounts: getAccounts = async(email) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM accounts WHERE user_email = "${email}";`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status": codes.SERVER_ERROR})
                    else resolve({"status":codes.GET_ACCOUNTS_SUCCESS,"accounts":result})
                })
            })
            
        })
        return res
    },
    getAccount: getAccount = async({email,id}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM accounts,` + 
                      `(SELECT COUNT(*) AS total_transactions FROM transactions WHERE transactions.account_id="${id}" AND transactions.user_email="${email}") AS x,` +
                      `(SELECT IFNULL(SUM(CASE WHEN type="Entrada" THEN value ELSE - value END),0) AS total_money FROM transactions WHERE transactions.account_id="${id}" AND transactions.user_email="${email}") as y WHERE id="${id}";`, async (err,result,fields) => { 
                    conn.release()
                    if(result === undefined) resolve({"status": codes.SERVER_ERROR})
                    else resolve({"status":codes.GET_ACCOUNTS_SUCCESS,"accounts":result})
                })
            })
            
        })
        return res
    },
    getAccountsDetails: getAccountsDetails = async({email}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT COUNT(*) AS total_transactions, IFNULL(SUM(CASE WHEN type="Entrada" THEN value ELSE - value END),0) AS total_money FROM transactions WHERE user_email="${email}";`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status": codes.SERVER_ERROR})
                    else resolve({"status":codes.GET_ACCOUNTS_DETAILS_SUCCESS,"accounts":result})
                })
            })
            
        })
        return res
    },
    getAccountStats: getAccountStats = async({id,email}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection(async (error,conn) => {
                const sumMonths = await new Promise((resolve,reject) => {
                    conn.query(`SELECT t.date,
                                    t.rental_count AS month_total,
                                    @running_total:=@running_total + t.rental_count AS cumulative_sum
                                FROM
                                    ( SELECT
                                        DATE_FORMAT(date,'%m-%Y') as date,
                                        IFNULL(SUM(CASE WHEN type="Entrada" THEN value ELSE - value END),0) as rental_count
                                        FROM transactions WHERE account_id = ${id} AND user_email = "${email}"
                                        GROUP BY DATE_FORMAT(date,'%m-%Y')
                                        ORDER BY MIN(date)
                                    ) t JOIN (SELECT @running_total:=0) r;`, (err,result,fields) => {
                        resolve(result)                    
                    })
                }) 
                const sumTags = await new Promise((resolve,reject) => {
                    conn.query(`SELECT t.title, SUM(tr.value) AS cumulative_sum FROM tags AS t
                                    INNER JOIN transactions AS tr
                                    ON t.transaction_id = tr.id AND tr.account_id = ${id}
                                    GROUP BY t.title;`, (err, result, fields) => {
                        resolve(result)
                    })
                }) 
                conn.release()
                if(sumTags === undefined || sumMonths === undefined) resolve({"status":codes.GET_ACCOUNT_STATS_ERROR})
                else resolve({"status":codes.GET_ACCOUNT_STATS_SUCCESS,"data":{sumTags: sumTags, sumMonths:sumMonths}})
            })
            
        })
        return res
    },
    getTags: getTags = async (id) => {
        var res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM tags WHERE transaction_id = ${id};`, (err,result,fields) => {
                    conn.release()
                    resolve(result)
                })
            })
            
        })
        return res
    },
    deleteTags: deleteTags = async (id) => {
        var res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`DELETE FROM tags WHERE transaction_id = ${id};`, async (err,result,field) => {
                    conn.release()
                    if(result === undefined) resolve({"message":"Falha na busca!","status":200})
                    resolve({"message":"Delete feito com sucesso!","status":200})
                })
            })
            
        })
        return res
    },
    deleteTag: deleteTag = async ({id,email}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`DELETE tags FROM tags
                            INNER JOIN transactions ON transactions.id = tags.transaction_id 
                            WHERE transactions.user_email = "${email}" AND tags.id = ${id};`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.DELETE_TAG_ERROR})
                    else resolve({"status":codes.DELETE_TAG_SUCCESS,"tag":{id:id}})
                })
            })
            
        })
        return res
    },
    newTag: newTag = async ({tag,transaction}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`INSERT INTO tags VALUES (DEFAULT, "${tag.title}","${transaction.id}","${transaction.account_id}");`, async (err,result,field) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.NEW_TAG_ERROR})
                    else resolve({"status":codes.NEW_TAG_SUCCESS,"tag":{id:result.insertId,title:tag.title,transaction_id:transaction.id}})
                })
            })
            
        })
        return res
    },
    newTransaction: newTransaction = async({account,transaction,user}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`INSERT INTO transactions VALUES (DEFAULT,"${user.email}","${account.id}","${transaction.title}","${transaction.description}","${transaction.modality}","${transaction.type}","${transaction.value}","${transaction.date}");`, async (err,result,field) => {
                    if(result === undefined) {
                        resolve({"status":codes.NEW_TRANSACTION_ERROR})
                    } else {
                        transaction.tags.map((tag) => {
                            conn.query(`INSERT INTO tags VALUES (DEFAULT, "${tag.title}", "${result.insertId}","${account.id}")`, async (err,result,fields) => {
                                if(result === undefined) {
                                    resolve({"status":codes.NEW_TRANSACTION_ERROR})
                                }
                            })
                        })
                        conn.query(`SELECT * FROM transactions WHERE transactions.id = ${result.insertId}`, async (err,result,field) => {
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
                conn.release()
            })
            
        })
        return res
    },
    getTransactions: getTransactions = async({email,account_id,pagination}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM transactions WHERE transactions.user_email = "${email}" AND transactions.account_id = "${account_id}" ORDER BY date DESC, id DESC LIMIT ${25*(pagination-1)},25;`, async (err,result,fields) => {
                    conn.release()
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
            
        })
        return res
    },
    deleteTransaction: deleteTransaction = async({id,email}) => {
        await deleteTags(id)
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`DELETE FROM transactions WHERE transactions.id = "${id}" AND transactions.user_email = "${email}";`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.DELETE_TRANSACTION_ERROR})
                    else resolve({"status":codes.DELETE_TRANSACTION_SUCCESS})
                })
            })
            
        })
        return res
    },
    updateTransaction: updateTransaction = async({user,transaction}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`UPDATE transactions SET description="${transaction.description}", title="${transaction.title}", modality="${transaction.modality}", type="${transaction.type}", value="${transaction.value}" WHERE id="${transaction.id}" AND user_email="${user.email}";`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.EDIT_TRANSACTION_ERROR})
                    else resolve({"status":codes.EDIT_TRANSACTION_SUCCESS})
                })
            })
            
        })
        return res
    },
    deleteAccount: deleteAccount = async({id,email}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`DELETE FROM accounts WHERE id="${id}" AND user_email="${email}";`, (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.DELETE_ACCOUNT_ERROR})
                    else resolve({"status":codes.DELETE_ACCOUNT_SUCCESS})
                })
            })
            
        })
        return res
    },
    newAnnotation: newAnnotation = async({id,value,title}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`INSERT INTO annotations VALUES (DEFAULT, "${id}", "${title}", "${value}");`, (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.NEW_TAG_ERROR})
                    else resolve({"status":codes.NEW_TAG_SUCCESS, "annotation": {title: title, value: value, id: result.insertId, account_id: id}})
                })
            })
            
        })
        return res
    },
    getAnnotations: getAnnotations = async({id}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM annotations WHERE account_id = "${id}";`, (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.NEW_TAG_ERROR})
                    else resolve({"status":codes.NEW_TAG_SUCCESS, "annotations": result})
                })
            })
            
        })
        return res
    },
    deleteAnnotation: deleteAnnotation = async({email, accountId, annotationId}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`DELETE annotations FROM annotations INNER JOIN accounts ON 
                            accounts.user_email = "${email}" WHERE 
                            accounts.id = ${accountId} AND annotations.id = ${annotationId};`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.DELETE_TAG_ERROR})
                    else resolve({"status":codes.DELETE_TAG_SUCCESS,"annotationId": annotationId})
                })
            })
            
        })
        return res
    },
    deleteAllAnnotations: deleteAllAnnotations = async({email, accountId}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`DELETE annotations FROM annotations INNER JOIN accounts ON
                            accounts.user_email = "${email}" WHERE
                            annotations.account_id = ${accountId};`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.DELETE_TAG_ERROR})
                    else resolve({"status":codes.DELETE_TAG_SUCCESS})
                })
            })
            
        })
        return res
    },
    getAnnotationsArticles: getAnnotationsArticles = async({id}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM annotationsArticles WHERE id = "${id}";`, (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.NEW_TAG_ERROR})
                    else resolve({"status":codes.NEW_TAG_SUCCESS, "annotationsArticles": result})
                })
            })
            
        })
        return res
    },
    updateAnnotationsArticles: updateAnnotationsArticles = async({user,annotationsArticles}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`UPDATE annotationsArticles SET content="${annotationsArticles.content}" WHERE id="${annotationsArticles.id}";`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.NEW_TAG_ERROR})
                    else resolve({"status":codes.NEW_TAG_SUCCESS})
                })
            })
            
        })
        return res
    },
    getPosts: getPosts = async({pagination}) => {
        res = await new Promise((resolve,reject) => {
            mysql.getConnection((error,conn) => {
                conn.query(`SELECT * FROM news;`, async (err,result,fields) => {
                    conn.release()
                    if(result === undefined) resolve({"status":codes.GET_TRANSACTIONS_ERROR})
                    else resolve({"status":codes.GET_TRANSACTIONS_SUCCESS,"posts":result})
                })
            })
            
        })
        return res
    }
}

module.exports = databaseFunctions