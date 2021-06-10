import axios from 'axios'

const url = "http://192.168.0.18:3100"

const loginAPI = async ({email,password}) => {
    try{
        const result = await axios.post(`${url}/user/login`, {
            data: {
                email: email,
                password: password
            }
        })
        return result
    } catch (e){
        return e
    }
}

const registerAPI = async ({email,password,name}) => {
    try {
        const result = await axios.post(`${url}/user/register`, {
            data: {
                email: email,
                password: password,
                name: name
            }
        })
        return result
    } catch {
        return null
    }
}

const verifyTokenAPI = async (token) => {
    try{
        const result = await axios.post(`${url}/user/verify`, {
            data: {
                token: token
            }
        })
    return result
    } catch {
        return null
    }
}

export {loginAPI,registerAPI,verifyTokenAPI}
