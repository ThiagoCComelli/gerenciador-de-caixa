import React,{useState,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {putNotification, putPost} from '../../actions'
import {getAccounts,deleteAccount} from '../../utils/api/db'
import { useRef } from 'react';
import './Home.css'

const Account = ({conta,handleDelete}) => {
    const div = useRef(null)

    const handleChange = (e) => {
        e.preventDefault()
        if(!div.current.style.transform) {
            div.current.style.transform = "translateY(-35px)"
        } else {
            div.current.style = ""
        }
        try {
            setTimeout(() => {
                if(div.current !== null) div.current.style = ""
            },5000)
        } catch {
            
        }
    }

    return (
        <div onContextMenu={(e) => {handleChange(e)}} className="mainHomeContentsItems">
            <div className="mainHomeContentsBoxButton">
                <button onClick={() => {handleDelete(conta.id)}}>Deletar</button>
            </div>
            <Link style={{color:"#000"}} to={{pathname:"/dashboard",state:conta}}>
                <div ref={div} className="mainHomeContentsBox">
                    <h4>{conta.nome}</h4>
                    <small>{conta.descricao}</small>
                    <span>{conta.id}</span>
                </div>
            </Link>
        </div>
    )
}

const NewAccount = ({handleUpdate}) => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => {
            dispatch(putPost({id: "NEW_POST", props:{
                handleUpdate: handleUpdate
            }}))
        }} className="mainHomeContentsItems">
            <div className="mainHomeContentsBox">
                <AddIcon style={{fontSize: 45}}/>
                <h4>Nova conta</h4>
            </div>
        </div>
    )
}


const Home = () => {
    const [contas,setContas] = useState([])
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        const res = await deleteAccount(user.email,id,localStorage.getItem("authToken"))

        try {
            if(res.data.message === "Delete feito com sucesso!") {
                dispatch(putNotification("DELETE_ACCOUNT_SUCCESS"))
                setContas(contas.filter(item => item.id !== id))
            } else {
                dispatch(putNotification("DELETE_ACCOUNT_ERROR"))
            }
        } catch {
            dispatch(putNotification("SERVER_ERROR"))
            
        }
        
    }

    const getAccountsFromAPI = async () => {
        const res = await getAccounts(user.email,localStorage.getItem("authToken"))
        try {
            setContas(res.data.accounts)
        } catch {
            dispatch(putNotification("SERVER_ERROR"))
        }
    }

    const handleUpdate = (account) => {
        setContas([...contas,account])
    }

    useEffect(() => {
        getAccountsFromAPI()
        // eslint-disable-next-line
    },[])

    return (
        <div className="mainHome">
            <div className="mainHomeContents">
                <h3>Suas contas:</h3>
                <div className="mainHomeContentsItemsBox">
                    {contas.map((conta,index) => {
                        return <Account handleDelete={handleDelete} key={index} conta={conta}/>
                    })}
                    <NewAccount handleUpdate={handleUpdate}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
