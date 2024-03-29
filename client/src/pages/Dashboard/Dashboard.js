import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {getTransactions,deleteTransaction,getAccount} from '../../utils/api/db'
import {useSelector,useDispatch} from 'react-redux'
import {randomstring} from 'randomstring-js'
import {putNotification,removePost,putPost,putContext,removeContext} from '../../actions';
import DashboardStats from '../../components/DashboardStats/DashboardStats';
import SideNews from '../../components/SideNews/SideNews';
import './Dashboard.css'

const Item = ({item, handleUpdate, handleDelete}) => {
    const dispatch = useDispatch()
    const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
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
        <>
        {item.special === undefined ? (
            <>
            <tr onContextMenu={handleContext} className={item.type}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                {/* <td>{item.modality}</td>
                <td>{item.type}</td> */}
                <td>R${item.value}</td>
                <td>{formatDate(item.date)}</td>
            </tr>
            </>
        ) : (
            <>
            <tr className="trEspecial">
                <td>#</td>
                <td>#</td>
                <td>#</td>
                {/* <td>#</td>
                <td>#</td> */}
                <td>#</td>
                <td>{months[item.special]}</td>
            </tr>
            </>
        )}
        </>
    )
}

const Pagination = ({pages,pagination,handlePagination}) => {
    var rows = []

    const renderPages = () => {
        for(let i = 1; i < pages+1; i++) {
            rows.push(<span key={randomstring()} onClick={() => {handlePagination(i)}} className={`${pagination === i ? 'mainItemsTablePaginationActive' : null}`}>{i}</span>)
        }
    }

    renderPages()

    return (
        <>
         {rows}
        </>
    )
}

const Dashboard = (props) => {
    const user = useSelector(state => state.user)
    const [items, setItems] = useState([])
    const [account,setAccount] = useState([])
    const [showMonths,setShowMonths] = useState(false)
    const [pagination,setPagination] = useState(1)
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

    const handlePagination = async (page) => {
        if(page !== pagination) {
            var res = await getTransactions(user.email, page, props.match.params.accountId,localStorage.getItem("authToken"))
            if(res) {
                setItems(res.data.transactions)
                setPagination(page)
            }
            res = await getAccount(user.email,localStorage.getItem("authToken"),props.match.params.accountId)
            if(res) {
                res.data.accounts[0] !== undefined ? setAccount({...res.data.accounts[0],total_transactions:res.data.accounts[0].total_transactions/25}) : history.push("/")
            }
        }
        
        
    }

    useEffect(() => {
        setShowMonths(false)
        const getTransacoes = async (page) => {
            const res = await getTransactions(user.email, page, props.match.params.accountId,localStorage.getItem("authToken"))
            if(res) {
                setItems(res.data.transactions)
                setShowMonths(true)
            }
        }
        
        const getAccounts = async () => {
            const res = await getAccount(user.email,localStorage.getItem("authToken"),props.match.params.accountId)
            if(res) {
                res.data.accounts[0] !== undefined ? setAccount({...res.data.accounts[0],total_transactions:res.data.accounts[0].total_transactions/25}) : history.push("/")
            }
        }
        
        if(props.match.params.accountId === undefined) {
            history.push("/")
        } else {
            getTransacoes(1)
            getAccounts()
        }
        // eslint-disable-next-line
    },[props.match.params.accountId])

    useEffect(() => {
        items.map((item,index) => {
            var res = new Date(item.date)
            return items[index].date = res
        })
        setItems(items.sort((a,b) => b.date - a.date))
    },[items,props.match.params.accountId])

    return (
        <>
        <div className="mainDashboard">
            <div className="mainDashboardBox">
                <div className="mainDashboardContents">
                    <DashboardStats account={account} handleNewItem={handleNewItem}/>
                    <div className="mainItemsTable">
                        <div className="mainItemsTableContents">
                            <table>
                                <tbody>
                                    <tr key={randomstring()}>
                                        <th>Numero</th>
                                        <th>Titulo</th>
                                        <th>Descrição</th>
                                        {/* <th>Modalidade</th>
                                        <th>Tipo</th> */}
                                        <th>Valor</th>
                                        <th>Data</th>
                                    </tr>
                                    {items.map((item,index) => {
                                        const months = () => {
                                            try {
                                                return index !== 0 ? 
                                                (items[index].date.getMonth() !== items[index-1].date.getMonth() ? 
                                                <Item item={{special: items[index].date.getMonth()}} items={items} handleUpdate={() => {}} handleDelete={() => {}} key={randomstring()}/> : null
                                                ) : <Item item={{special: items[index].date.getMonth()}} items={items} handleUpdate={() => {}} handleDelete={() => {}} key={randomstring()}/>
                                            } catch (e) {

                                            }
                                        }
                                        return (
                                            <React.Fragment key={index}>
                                                {showMonths ? months() : null}
                                                <Item item={item} items={items} handleUpdate={handleUpdate} handleDelete={handleDelete} key={randomstring()}/>
                                            </React.Fragment>                                        
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mainItemsTablePagination">
                        <Pagination handlePagination={handlePagination} pagination={pagination} pages={account.total_transactions} />
                    </div>
                </div>
                <div className="mainDashboardSide">
                    <SideNews account={account}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
