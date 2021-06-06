import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {loginAPI,registerAPI} from '../../utils/api/auth'
import {useDispatch} from 'react-redux'
import {signIn} from '../../actions'
import './Login.css'

const LoginDiv = ({handleChange,changeScreen}) => {
    return (
        <>
        <h3>Entre na sua conta</h3>
        <div className="formLoginDiv">
            <div className="formLoginDivInput">
                <span>email</span>
                <input id="email" onChange={handleChange} type="text" required></input>
            </div>
            <div className="formLoginDivInput">
                <span>Senha</span>
                <input id="senha" onChange={handleChange} type="password" required></input>
            </div>
            <div className="formLoginDivForgot">
                <small></small>
                <small onClick={() => {changeScreen(false)}}>Criar uma conta!</small>
            </div>
            <div className="formLoginDivButton">
                <button type="submit">Log in</button>
            </div>
        </div>
        </>
    )
}

const RegisterDiv = ({handleChange,changeScreen}) => {
    return (
        <>
        <h3>Crie uma conta</h3>
        <div className="formLoginDiv">
            <div className="formLoginDivInput">
                <span>Nome completo</span>
                <input id="nome" onChange={handleChange} type="text" required></input>
            </div>
            <div className="formLoginDivInput">
                <span>Email</span>
                <input id="email" onChange={handleChange} type="email" required></input>
            </div>
            <div className="formLoginDivInput">
                <span>Senha</span>
                <input id="senha" onChange={handleChange} type="password" required></input>
            </div>
            <div className="formLoginDivInput">
                <span>Confirme a senha</span>
                <input id="senhaDenovo" onChange={handleChange} type="password" required></input>
            </div>
            <div className="formLoginDivForgot">
                <small></small>
                <small onClick={() => {changeScreen(true)}}>Faca login!</small>
            </div>
            <div className="formLoginDivButton">
                <button type="submit">Register</button>
            </div>
        </div>
        </>
    )
}

export default function Login(){
    const [state,setState] = useState(true)
    const [dados,setDados] = useState({email:"",senha:"",senhaDenovo:"",nome:""})
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        var res

        if(state) {
            res = await loginAPI({"data":{"email": dados.email,"senha": dados.senha}})
        } else {
            res = await registerAPI({"data":{"nome":dados.nome,"email":dados.email,"senha":dados.senha}})
        }
        
        try {
            if(res.data.token) {
                dispatch(signIn(res.data.user))
                localStorage.setItem("authToken", res.data.token)
                history.push("/")
            }
        } catch {
            
        }
        
    }

    const handleChange = (e) => {
        setDados({...dados, [e.target.id]: e.target.value})
    }

    return(
        <>
        <div className="mainLogin">
            <form onSubmit={handleSubmit} className="formLogin">
                {state ? <LoginDiv handleChange={handleChange} changeScreen={setState}/> : <RegisterDiv handleChange={handleChange} changeScreen={setState}/>}
            </form>
        </div>
        </>
    )
}