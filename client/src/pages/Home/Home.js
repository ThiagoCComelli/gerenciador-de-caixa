import React,{useState,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {putNotification, putPost} from '../../actions'
import {getAccounts,deleteAccount} from '../../utils/api/db'
import { useRef } from 'react';
import './Home.css'

const Account = ({account,handleDelete}) => {
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
                <button onClick={() => {handleDelete(account.id)}}>Deletar</button>
            </div>
            <Link style={{color:"#000"}} to={{pathname:"/dashboard",state:account}}>
                <div ref={div} className="mainHomeContentsBox">
                    <h4>{account.title}</h4>
                    <small>{account.description}</small>
                    <span>{account.id}</span>
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
    const [accounts,setAccounts] = useState([])
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        const res = await deleteAccount(user.email,id,localStorage.getItem("authToken"))

        try {
            if(res.data.status.code === "DELETE_ACCOUNT_SUCCESS") {
                dispatch(putNotification(res.data.status))
                setAccounts(accounts.filter(item => item.id !== id))
            } else {
                dispatch(putNotification(res.data.status))
            }
        } catch {
            dispatch(putNotification(res.data.status))
            
        }
        
    }

    const getAccountsFromAPI = async () => {
        const res = await getAccounts(user.email,localStorage.getItem("authToken"))
        try {
            setAccounts(res.data.accounts)
        } catch {
            dispatch(putNotification(res.data.status))
        }
    }

    const handleUpdate = (account) => {
        setAccounts([...accounts,account])
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
                    {accounts.map((account,index) => {
                        return <Account handleDelete={handleDelete} key={index} account={account}/>
                    })}
                    <NewAccount handleUpdate={handleUpdate}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
