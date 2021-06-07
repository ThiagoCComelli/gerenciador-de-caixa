import axios from 'axios'

const newAccount = async (data) => {
    try {
        const result = await axios.post('http://localhost:8080/user/new-account', data)
        return result
    } catch {
        return null
    }
    
}

const getAccounts = async (email,token) => {
    try {
        const result = await axios.get('http://localhost:8080/user/get-accounts', {params: {
            email: email,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}

const newTransaction = async (data) => {
    try {
        const result = await axios.post('http://localhost:8080/user/new-transaction', data)
        return result
    } catch {
        return null
    }
    
}

const getTransactions = async (email,account_id,token) => {
    try {
        const result = await axios.get('http://localhost:8080/user/get-transactions', {params: {
            account_id: account_id,
            email: email,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteTransaction = async(email,id,token) => {
    try {
        const result = await axios.delete('http://localhost:8080/user/delete-transaction', {params: {
            id: id,
            email: email,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteAccount = async(email,id,token) => {
    try {
        const result = await axios.delete('http://localhost:8080/user/delete-account', {params: {
            id: id,
            email: email,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}

const newTag = async(data) => {
    try {
        const result = await axios.post('http://localhost:8080/user/new-tag', data)
        return result
    } catch {
        return null
    }
}

const deleteTag = async(email,id,token) => {
    try {
        const result = await axios.delete('http://localhost:8080/user/delete-tag', {params: {
            id: id,
            email: email,
            token: token
        }})
        return result
    } catch {
        return null
    }
}

const updateTransaction = async(data) => {
    try {
        const result = await axios.post('http://localhost:8080/user/update-transaction', data)
        return result
    } catch {
        return null
    }
}


export {newAccount,getAccounts,newTransaction,getTransactions,deleteTransaction,deleteAccount,newTag,deleteTag,updateTransaction}
