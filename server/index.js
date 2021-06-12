require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {createUser,loginUser,verifyUser,newAccount,
       getAccounts,newTransaction, deleteTransaction,
       deleteAccount, newTag, updateTransaction, 
       getAccountsDetails,getAccount} = require('./utils/database/database')
const { verifyToken } = require('./utils/auth/jwt')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.status(200).send({msg: "ok"})
})

app.post('/user/register', async (req,res) => {
    if(req.body.data) {
        const response = await createUser(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/login', async (req,res) => {
    if(req.body.data) {
        const response = await loginUser(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/verify', async (req,res) => {
    if(req.headers.authorization) {
        const response = await verifyUser(req.headers.authorization)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/new-account', verifyToken ,async (req,res) => {
    if(req.body.data) {
        const response = await newAccount(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-accounts', verifyToken, async (req,res) => {
    if(req.query.email) {
        const response = await getAccounts(req.query.email)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-account', verifyToken, async (req,res) => {
    if(req.query.email && req.query.id) {
        const response = await getAccount(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-accounts-details', verifyToken, async (req,res) => {
    if(req.query.email) {
        const response = await getAccountsDetails(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/new-transaction', verifyToken, async (req,res) => {
    if(req.body.data) {
        const response = await newTransaction(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-transactions', verifyToken, async (req,res) => {
    if(req.query.account_id && req.query.email && req.query.pagination) {
        const response = await getTransactions(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-transaction', verifyToken, async (req,res) => {
    if(req.query.id && req.query.email) {
        const response = await deleteTransaction(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-account', verifyToken, async (req,res) => {
    if(req.query.id && req.query.email) {
        const response = await deleteAccount(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/new-tag', verifyToken, async (req,res) => {
    if(req.body.data) {
        const response = await newTag(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-tag', verifyToken, async (req,res) => {
    if(req.query.id && req.query.email) {
        const response = await deleteTag(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/update-transaction', verifyToken, async (req,res) => {
    if(req.body.data) {
        const response = await updateTransaction(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})
