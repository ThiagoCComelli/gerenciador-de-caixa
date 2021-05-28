require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {createUser,loginUser,verifyUser} = require('./utils/database/database')
const {verifyToken} = require('./utils/auth/jwt')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.post('/user/register', async (req,res) => {
    console.log(req.body)
    if(req.body.data) {
        const response = await createUser(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/login', async (req,res) => {
    console.log(req.body)
    if(req.body.data) {
        const response = await loginUser(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/verify', async (req,res) => {
    console.log(req.body)
    if(req.body.data) {
        const response = await verifyUser(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})
