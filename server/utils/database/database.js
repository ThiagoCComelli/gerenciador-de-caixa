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
    }
}

module.exports = databaseFunctions