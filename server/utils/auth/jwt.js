const jwt = require('jsonwebtoken')
const codes = require('../codes.json')

const jwtFunctions = {
    createToken: createToken = (email,name) => {
        const token = jwt.sign({
            name: name,
            email: email
        }, process.env.JWT_KEY, {expiresIn: "24h"})
        return token
    },
    verifyToken: verifyToken = async (token) => {
        const res = await new Promise((resolve,reject) => {
            jwt.verify(token,process.env.JWT_KEY, (err,user) => {
                if (err) resolve({"status":codes.TOKEN_ERROR})
                else resolve({"status":codes.TOKEN_SUCCESS,user:user})
            })
        })
        return res
    }
}

module.exports = jwtFunctions