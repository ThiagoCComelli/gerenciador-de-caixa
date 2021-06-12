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
    verifyToken: verifyToken = async (req,res,next) => {
        try {
            jwt.verify(req.headers.authorization.split(" ")[1],process.env.JWT_KEY, (err,user) => {
                if (err) res.status(401).send({"status":codes.AUTH_DENIED})
                else if(req.body.data !== undefined) {
                    if(req.body.data.user.email === user.email) next()
                    else res.status(401).send({"status":codes.AUTH_DENIED})
                } else if(req.query.email !== undefined) {
                    if(req.query.email === user.email) next()
                    else res.status(401).send({"status":codes.AUTH_DENIED})
                } else {
                    res.status(401).send({"status":codes.AUTH_DENIED})
                }
            })
        } catch (e) {
            console.log(e)
            res.status(401).send({"status":codes.BAD_REQUEST})
        }
    },
    getToken: getToken = (token) => {
        const user = jwt.decode(token.split(" ")[1], algorithms=["RS256"])
        return {name:user.name,email:user.email}
    }
}

module.exports = jwtFunctions