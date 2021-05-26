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
            bcrypt.genSalt(process.env.SALT_ROUNDS, (err,salt) => {
                if (err) resolve(err)
                bcrypt.hash(senha, salt, (err_, hash) => {
                    if (err_) resolve(err_)

                    con.query(`INSERT INTO usuarios VALUES ("${cpf}","${nome}","${email}","${hash}");`, (err,result) => {
                        if(result === undefined) {
                            resolve({"message":"Usuario ja cadastrado!","status":400})
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
                if(result === undefined) resolve({"message":"Falha na autenticacao!","status":400})
                if(await bcrypt.compare(senha,result[0].senha)) {
                    const token = createToken(result[0].email,result[0].nome)
                    resolve({"message":"Usuario logado com sucesso!","status":200,"token":token})
                } else {
                    resolve({"message":"Falha na autenticacao!","status":400})
                }
            })
        })
        
        return res
    }
}

module.exports = databaseFunctions