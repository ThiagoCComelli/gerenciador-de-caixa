const jwt = require('jsonwebtoken')

const jwtFunctions = {
    createToken: createToken = (email,nome) => {
        const token = jwt.sign({
            nome: nome,
            email: email
        }, process.env.JWT_KEY, {expiresIn: "24h"})
        return token
    },
    verifyToken: verifyToken = (token) => {
        return jwt.verify(token,process.env.JWT_KEY)
    }
}

module.exports = jwtFunctions