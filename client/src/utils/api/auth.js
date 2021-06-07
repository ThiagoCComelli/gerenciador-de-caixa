import axios from 'axios'

const url = "http://192.168.0.18:8080"

const loginAPI = async (data) => {
    try{
        const result = await axios.post(`${url}/user/login`, data)
        return result
    } catch (e){
        return e
    }
}

const registerAPI = async (data) => {
    try {
        const result = await axios.post(`${url}/user/register`, data)
        return result
    } catch {
        return null
    }
}

const verifyTokenAPI = async (data) => {
    try{
        const result = await axios.post(`${url}/user/verify`, data)
    return result
    } catch {
        return null
    }
}

export {loginAPI,registerAPI,verifyTokenAPI}
