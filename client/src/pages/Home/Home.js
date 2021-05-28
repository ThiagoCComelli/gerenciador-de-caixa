import React,{useState,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {putPost} from '../../actions'
import {getAccounts,deleteAccount} from '../../utils/api/db'
import './Home.css'
import { useRef } from 'react';

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

const NewAccount = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => {
            dispatch(putPost("NEW_POST"))
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

    const handleDelete = async (id) => {
        const res = await deleteAccount(user.cpf,id,localStorage.getItem("authToken"))

        if(res.data.message === "Delete feito com sucesso!") {
            setContas(contas.filter(item => item.id !== id))
        }
    }

    const getAccountsFromAPI = async () => {
        const res = await getAccounts(user.cpf,localStorage.getItem("authToken"))
        setContas(res.data.accounts)
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
                    <NewAccount />
                </div>
            </div>
        </div>
    )
}

export default Home;
