require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {createUser,loginUser,verifyUser,newAccount,getAccounts,newTransaction, deleteTransaction, deleteAccount} = require('./utils/database/database')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.post('/user/register', async (req,res) => {
    if(req.body.data) {
        const response = await createUser(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/login', async (req,res) => {
    if(req.body.data) {
        const response = await loginUser(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/verify', async (req,res) => {
    if(req.body.data) {
        const response = await verifyUser(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/new-account', async (req,res) => {
    if(req.body.data) {
        const response = await newAccount(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-accounts', async (req,res) => {
    if(req.query.id) {
        const response = await getAccounts(req.query)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/new-transaction', async (req,res) => {
    if(req.body.data) {
        const response = await newTransaction(req.body.data)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-transactions', async (req,res) => {
    if(req.query.account_id && req.query.cpf) {
        const response = await getTransactions(req.query)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-transaction', async (req,res) => {
    if(req.query.id && req.query.cpf) {
        const response = await deleteTransaction(req.query)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-account', async (req,res) => {
    if(req.query.id && req.query.cpf) {
        const response = await deleteAccount(req.query)
        res.status(response.status).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})
