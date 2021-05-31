import axios from 'axios'

const newAccount = async (data) => {
    try {
        const result = await axios.post('http://localhost:8080/user/new-account', data)
        return result
    } catch {
        return null
    }
    
}

const getAccounts = async (cpf,token) => {
    try {
        const result = await axios.get('http://localhost:8080/user/get-accounts', {params: {
            id: cpf,
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

const getTransactions = async (cpf,account_id,token) => {
    try {
        const result = await axios.get('http://localhost:8080/user/get-transactions', {params: {
            account_id: account_id,
            cpf: cpf,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteTransaction = async(cpf,id,token) => {
    try {
        const result = await axios.delete('http://localhost:8080/user/delete-transaction', {params: {
            id: id,
            cpf: cpf,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}

const deleteAccount = async(cpf,id,token) => {
    try {
        const result = await axios.delete('http://localhost:8080/user/delete-account', {params: {
            id: id,
            cpf: cpf,
            token: token
        }})
        return result
    } catch {
        return null
    }
    
}


export {newAccount,getAccounts,newTransaction,getTransactions,deleteTransaction,deleteAccount}
