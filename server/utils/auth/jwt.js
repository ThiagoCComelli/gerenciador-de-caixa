const jwt = require('jsonwebtoken')

const jwtFunctions = {
    createToken: createToken = (cpf,nome) => {
        const token = jwt.sign({
            nome: nome,
            cpf: cpf
        }, process.env.JWT_KEY, {expiresIn: "24h"})
        return token
    },
    verifyToken: verifyToken = async (token) => {
        const res = await new Promise((resolve,reject) => {
            jwt.verify(token,process.env.JWT_KEY, (err,user) => {
                if (err) {resolve({message:"Token invalido!",status:200})}
                resolve({message:"Token verificado!",status:200,user:user})
            })
        })
        return res
    }
}

module.exports = jwtFunctions