import React,{useState,useEffect} from 'react';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {putNotification,putPost,putContext,removeContext, removePost} from '../../actions'
import {getAccounts,getAccountsDetails,deleteAccount} from '../../utils/api/db'
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
            <Link style={{textDecoration: "none", color: "#000",width: "100%",height: "100%"}} to={{pathname:`/dashboard/${account.id}`}}>
                <div className="mainHomeAccountsItemsInfos">
                    <img alt="money" src={`${process.env.PUBLIC_URL}/images/logo.png`}></img>
                    <div className="mainHomeAccountsItemsInfosText">
                        <span>{account.title}</span>
                        <small>{account.description}</small>
                    </div>
                    <strong>#{account.id}</strong>
                </div>
            </Link>
            <div className="mainHomeContentsAccountsItemsEditIcon">
                <ListOutlinedIcon onClick={handleChange} />
            </div>
        </div>
    )
}

const Home = () => {
    const [accounts,setAccounts] = useState([])
    const [accountsDetails,setAccountsDetails] = useState(null)
    const [showMoney,setShowMoney] = useState(true)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        const res = await deleteAccount(user.email,id,localStorage.getItem("authToken"))

        try {
            if(res.data.status.code === "DELETE_ACCOUNT_SUCCESS") {
                dispatch(putNotification(res.data.status))
                dispatch(removePost())
                getAccountsDetailsFromAPI()
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

    const getAccountsDetailsFromAPI = async () => {
        const res = await getAccountsDetails(user.email,localStorage.getItem("authToken"))
        try {
            setAccountsDetails(res.data.accounts[0])
        } catch {
            dispatch(putNotification(res.data.status))
        }
    }

    useEffect(() => {
        getAccountsFromAPI()
        getAccountsDetailsFromAPI()
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
                            <strong onClick={() => {setShowMoney(!showMoney)}}>
                                R${accountsDetails ? (showMoney ? accountsDetails.total_money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : accountsDetails.total_money.toFixed(2).replace(/\d/g, '*')) : "?"}
                                
                                {showMoney ? <VisibilityOutlinedIcon /> : 
                                <VisibilityOffOutlinedIcon />
                                }
                            </strong>
                        </div>
                    </div>
                    <div className="mainHomeContentsLandingItem">
                        <div className="mainHomeLandingSub">
                            <ReceiptOutlinedIcon style={{fontSize: 40}}/>
                            <span>Transações totais *</span>
                            <strong>{accountsDetails ? accountsDetails.total_transactions : "?"}</strong>
                        </div>
                    </div>
                    <div className="mainHomeContentsLandingItem">
                        <div className="mainHomeLandingSub">
                            <AccountTreeOutlinedIcon style={{fontSize: 40}}/>
                            <span>Contas monitoradas *</span>
                            <strong>{accounts ? accounts.length : "?"}</strong>
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
