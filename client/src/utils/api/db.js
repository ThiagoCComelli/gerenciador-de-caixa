import axios from 'axios'

const url = "http://192.168.0.18:8080"

const newAccount = async (user,account,token) => {
    try {
        const result = await axios.post(`${url}/user/new-account`, {
            data: {
                user: user,
                account: account,
                token: token
            }
        })
        return result
    } catch {
        return null
    }
    
}

const getAccounts = async (email,token) => {
    try {
        const result = await axios.get(`${url}/user/get-accounts`, {params: {
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
        const result = await axios.post(`${url}/user/new-transaction`, data)
        return result
    } catch {
        return null
    }
    
}

const getTransactions = async (email,account_id,token) => {
    try {
        const result = await axios.get(`${url}/user/get-transactions`, {params: {
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
        const result = await axios.delete(`${url}/user/delete-transaction`, {params: {
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
        const result = await axios.delete(`${url}/user/delete-account`, {params: {
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
        const result = await axios.post(`${url}/user/new-tag`, data)
        return result
    } catch {
        return null
    }
}

const deleteTag = async(email,id,token) => {
    try {
        const result = await axios.delete(`${url}/user/delete-tag`, {params: {
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
        const result = await axios.post(`${url}/user/update-transaction`, data)
        return result
    } catch {
        return null
    }
}


export {newAccount,getAccounts,newTransaction,getTransactions,deleteTransaction,deleteAccount,newTag,deleteTag,updateTransaction}
