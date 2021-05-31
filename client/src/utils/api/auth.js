import axios from 'axios'

const loginAPI = async (data) => {
    try{
        const result = await axios.post('http://localhost:8080/user/login', data)
        return result
    } catch {
        return null
    }
}

const registerAPI = async (data) => {
    try {
        const result = await axios.post('http://localhost:8080/user/register', data)
        return result
    } catch {
        return null
    }
}

const verifyTokenAPI = async (data) => {
    try{
        const result = await axios.post('http://localhost:8080/user/verify', data)
    return result
    } catch {
        return null
    }
}

export {loginAPI,registerAPI,verifyTokenAPI}
