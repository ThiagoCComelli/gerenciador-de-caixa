import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {getTransactions,deleteTransaction,getAccount} from '../../utils/api/db'
import {useSelector,useDispatch} from 'react-redux'
import {randomstring} from 'randomstring-js'
import {putNotification,removePost,putPost,putContext,removeContext} from '../../actions';
import NewItem from '../../components/NewItem/NewItem'
import './Dashboard.css'

const Item = ({item, handleUpdate, handleDelete}) => {
    const dispatch = useDispatch()
    const context = useSelector(state => state.context)

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year].join('-');
    }

    const handleModalEdit = () => {
        dispatch(putPost({id:"EDIT_TRAN",props:{
            item: item,
            handleUpdate: handleUpdate
        }}))
    }

    const handleModalDelete = () => {
        dispatch(putPost({id: "CONFIRM_DELETE", props: {
            handleDelete: () => {handleDelete(item.id)}
        }}))
    }

    const handleContext = (e) => {
        e.preventDefault()

        context ? dispatch(removeContext()) : dispatch(putContext({options:[{title:"Editar",function:handleModalEdit},{title:"Deletar",function:handleModalDelete}],position:{x:e.pageX,y:e.pageY}}))

    }

    return (
        <tr onContextMenu={handleContext} className={item.type}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.modality}</td>
            <td>{item.type}</td>
            <td>R${item.value}</td>
            <td>{formatDate(item.date)}</td>
        </tr>
    )
}

const Dashboard = (props) => {
    const user = useSelector(state => state.user)
    const [items, setItems] = useState([])
    const [account,setAccount] = useState([])
    const [money, setMoney] = useState(0)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleNewItem = (newItem) => {
        setItems([...items,newItem])
    }

    const handleUpdate = (state) => {
        setItems(items.map((item) => {
            if(item.id !== state.id) return item
            for(let [key] of Object.entries(state)) {
                item[key] = state[key]
            }
            return item
        }))
    }

    const handleDelete = async (id) => {
        const res = await deleteTransaction(user.email,id,localStorage.getItem("authToken"))
        
        try {
            if(res.data.status.code === "DELETE_TRANSACTION_SUCCESS") {
                dispatch(putNotification(res.data.status))
                dispatch(removePost())
                setItems(items.filter(item => item.id !== id))
            } else {
                dispatch(putNotification(res.data.status))
                
            }
        } catch {
            // dispatch(putNotification(res.data.status))

        }
        
    }

    useEffect(() => {

        const getTransacoes = async () => {
            const res = await getTransactions(user.email, props.match.params.accountId,localStorage.getItem("authToken"))
            if(res) {
                setItems(res.data.transactions)
            }
        }

        const getAccounts = async () => {
            const res = await getAccount(user.email,localStorage.getItem("authToken"),props.match.params.accountId)
            if(res) {
                res.data.accounts[0] !== undefined ? setAccount(res.data.accounts[0]) : history.push("/")
            }
        }
        
        if(props.match.params.accountId === undefined) {
            history.push("/")
        } else {
            getTransacoes()
            getAccounts()
        }
    // eslint-disable-next-line
    },[])

    useEffect(() => {
        var moneyTmp = 0
        items.map((item,index) => {
            item.type === "Saida" ? moneyTmp -= item.value : moneyTmp += item.value
            var res = new Date(item.date)
            return items[index].date = res
        })
        setMoney(moneyTmp)
        setItems(items.sort((a,b) => b.date - a.date))
    },[items])

    if(props.match.params.accountId === undefined && account === null) {
        return <></>
    }

    return (
        <div className="mainDashboard">
            <div className="mainDashboardContents">
                <div className="mainDashboardContentsInfos">
                    <h1>Conta: {account.title}</h1>
                    <small>Descrição: {account.description}</small>
                    <button onClick={() => {history.push("/")}}>Voltar</button>
                </div>
                <NewItem account_id={account.id} handleNewItem={handleNewItem}/>
                <div className="mainItemsTable">
                    <div className="mainItemsTableContents">
                        <table>
                            <tbody>
                                <tr key={randomstring()}>
                                    <th>Numero</th>
                                    <th>Titulo</th>
                                    <th>Descrição</th>
                                    <th>Modalidade</th>
                                    <th>Tipo</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                </tr>
                                {items.map((item) => {
                                    return (
                                        <Item item={item} items={items} handleUpdate={handleUpdate} handleDelete={handleDelete} key={randomstring()}/>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="mainItemsTableContentsFooter">
                            <span>Total em caixa: R${money}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
