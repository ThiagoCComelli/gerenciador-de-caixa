import axios from 'axios'

const newAccount = async (data) => {
    const result = await axios.post('http://localhost:8080/user/new-account', data)
    return result
}

const getAccounts = async (cpf,token) => {
    const result = await axios.get('http://localhost:8080/user/get-accounts', {params: {
        id: cpf,
        token: token
    }})
    return result
}

const newTransaction = async (data) => {
    const result = await axios.post('http://localhost:8080/user/new-transaction', data)
    return result
}

const getTransactions = async (cpf,account_id,token) => {
    const result = await axios.get('http://localhost:8080/user/get-transactions', {params: {
        account_id: account_id,
        cpf: cpf,
        token: token
    }})
    return result
}

const deleteTransaction = async(cpf,id,token) => {
    const result = await axios.delete('http://localhost:8080/user/delete-transaction', {params: {
        id: id,
        cpf: cpf,
        token: token
    }})
    return result
}

const deleteAccount = async(cpf,id,token) => {
    const result = await axios.delete('http://localhost:8080/user/delete-account', {params: {
        id: id,
        cpf: cpf,
        token: token
    }})
    return result
}


export {newAccount,getAccounts,newTransaction,getTransactions,deleteTransaction,deleteAccount}
