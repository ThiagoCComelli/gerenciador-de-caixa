import React,{useState,useEffect} from 'react';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import {useDispatch,useSelector} from 'react-redux'
// import {Link} from 'react-router-dom'
import {putNotification,putPost,putContext,removeContext, removePost} from '../../actions'
import {getAccounts,deleteAccount} from '../../utils/api/db'
import './Home.css'

const Account = ({account,handleDelete}) => {
    const context = useSelector(state => state.context)
    const dispatch = useDispatch()

    const handleModal = () => {
        dispatch(putPost({id: "CONFIRM_DELETE", props: {
            handleDelete: () => {handleDelete(account.id)}
        }}))
    }

    const handleChange = (e) => {
        e.preventDefault()

        context ? dispatch(removeContext()) : dispatch(putContext({options:[{title:"Editar",function: () => {}},{title:"Deletar",function:handleModal}],position:{x:e.pageX,y:e.pageY}}))
       
    }

    return (
        <div className="mainHomeContentsAccountsItems">
            <div className="mainHomeAccountsItemsInfos">
                <img alt="money" src={`${process.env.PUBLIC_URL}/images/logo.png`}></img>
                <div className="mainHomeAccountsItemsInfosText">
                    <span>{account.title}</span>
                    <small>{account.description}</small>
                </div>
            </div>
            <div className="mainHomeContentsAccountsItemsEditIcon">
                <ListOutlinedIcon onClick={handleChange} />
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
                dispatch(removePost())
                setAccounts(accounts.filter(item => item.id !== id))
            } else {
                dispatch(putNotification(res.data.status))
            }
        } catch {
            // dispatch(putNotification(res.data.status))
        }
    }

    const handleNewAccount = () => {
        dispatch(putPost({id: "NEW_POST", props:{
            handleUpdate: (account) => {setAccounts([...accounts,account])}
        }}))
    }

    const getAccountsFromAPI = async () => {
        const res = await getAccounts(user.email,localStorage.getItem("authToken"))
        try {
            setAccounts(res.data.accounts)
        } catch {
            dispatch(putNotification(res.data.status))
        }
    }

    useEffect(() => {
        getAccountsFromAPI()
        // eslint-disable-next-line
    },[])

    return (
        <div className="mainHome">
            <div className="mainHomeContents">
                <div className="mainHomeContentsLanding">
                    <div className="mainHomeContentsLandingItem mainHomeLanding">
                        <span>Bem vindo</span>
                        <img alt="cartoon workers" src={`${process.env.PUBLIC_URL}/images/4457.jpg`}></img>
                    </div>
                    <div className="mainHomeContentsLandingItem">
                        <div className="mainHomeLandingSub">
                            <AccountBalanceWalletOutlinedIcon style={{fontSize: 40}}/>
                            <span>Dinheiro total *</span>
                            <strong>R$xx xxx</strong>
                        </div>
                    </div>
                    <div className="mainHomeContentsLandingItem">
                        <div className="mainHomeLandingSub">
                            <ReceiptOutlinedIcon style={{fontSize: 40}}/>
                            <span>Transações totais *</span>
                            <strong>x</strong>
                        </div>
                    </div>
                    <div className="mainHomeContentsLandingItem">
                        <div className="mainHomeLandingSub">
                            <AccountTreeOutlinedIcon style={{fontSize: 40}}/>
                            <span>Contas monitoradas *</span>
                            <strong>{accounts.length}</strong>
                        </div>
                    </div>
                </div>
                <div className="mainHomeContentsAccounts">
                    <div className="mainHomeContentsAccountsConfigs">
                        <h3>Contas</h3>
                        <SearchOutlinedIcon />
                        <button onClick={handleNewAccount}>Nova conta</button>
                    </div>
                    {accounts.map((account,index) => {
                        return <Account handleDelete={handleDelete} key={index} account={account}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
