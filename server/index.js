require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const {createUser,loginUser,verifyUser,newAccount,
       getAccounts,newTransaction, deleteTransaction,
       deleteAccount, newTag, updateTransaction, 
       getAccountsDetails,getAccount,getAccountStats,
       getAnnotations, newAnnotation, deleteAnnotation,
       deleteAllAnnotations, getAnnotationsArticles,
       updateAnnotationsArticles, getPosts} = require('./utils/database/database')
const { verifyToken } = require('./utils/auth/jwt')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(cookieParser())
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

app.get('/user/get-account-status', verifyToken, async (req,res) => {
    if(req.query.email) {
        const response = await getAccountStats(req.query)
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

app.post('/user/new-annotation', verifyToken, async (req,res) => {
    if(req.body.data) {
        const response = await newAnnotation(req.body.data.annotation)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-annotations', verifyToken, async (req, res) => {
    if(req.query.id && req.query.email) {
        const response = await getAnnotations(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-annotation', verifyToken, async (req,res) => {
    if(req.query.accountId && req.query.email && req.query.annotationId) {
        const response = await deleteAnnotation(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.delete('/user/delete-annotations', verifyToken, async (req,res) => {
    if(req.query.accountId && req.query.email) {
        const response = await deleteAllAnnotations(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/user/get-annotations-articles', verifyToken, async (req, res) => {
    if(req.query.id) {
        const response = await getAnnotationsArticles(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.post('/user/update-annotations-articles', verifyToken, async (req,res) => {
    if(req.body.data) {
        const response = await updateAnnotationsArticles(req.body.data)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.get('/get-posts', async (req,res) => {
    if(req.query.pagination) {
        const response = await getPosts(req.query)
        res.status(200).send(response)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})
