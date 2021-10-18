import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {signOut,putNotification} from '../../actions'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Navbar.css'

const Navbar = () => {
    const isLogged = useSelector(state => state.user)
    const [state,setState] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        setState(isLogged)
    },[isLogged])

    const handleLogin = () => {
        dispatch(signOut())
        dispatch(putNotification({
            "title": "Conta desconectada!",
            "description": "Conta desconectada com sucesso",
            "status": "success",
            "code": "SIGN_OUT"
        }))
        history.push("/login")
        localStorage.removeItem("authToken")
    }

    return (
        <div className="mainNavbar">
            <div className="mainNavbarContents">
                <h2 onClick={() => {history.push("/")}}>Gerenciador de caixa</h2>
                {state ? (
                    <>
                    <span className="mainNavbarContentsSearch">
                        <SearchOutlinedIcon />
                        <input placeholder="Pesquise algo" type="text"></input>
                    </span>
                    <span onClick={() => {handleLogin()}}>Sair</span>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default Navbar;
