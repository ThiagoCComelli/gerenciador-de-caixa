import axios from 'axios'

const loginAPI = async (data) => {
    const result = await axios.post('http://localhost:8080/user/login', data)
    return result
}

const registerAPI = async (data) => {
    console.log(data)
    const result = await axios.post('http://localhost:8080/user/register', data)
    return result
}

export {loginAPI,registerAPI}
