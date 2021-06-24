import axios from 'axios'

const url = () => {
    return localStorage.getItem("api") || process.env.REACT_APP_IP
}

const loginAPI = async ({email,password}) => {
    try{
        const result = await axios.post(`${url()}/user/login`, {
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
        const result = await axios.post(`${url()}/user/register`, {
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
        const result = await axios.post(`${url()}/user/verify`, {}, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
    return result
    } catch {
        return null
    }
}

export {loginAPI,registerAPI,verifyTokenAPI}
