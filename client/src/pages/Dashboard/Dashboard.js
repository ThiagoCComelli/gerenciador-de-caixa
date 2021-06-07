import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {getTransactions,deleteTransaction} from '../../utils/api/db'
import NewItem from '../../components/NewItem/NewItem'
import {useSelector,useDispatch} from 'react-redux'
import ItemsTable from '../../components/ItemsTable/ItemsTable'
import './Dashboard.css'
import { putNotification } from '../../actions';

const Dashboard = (props) => {
    const user = useSelector(state => state.user)
    const [items, setItems] = useState([])
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
            if(res.data.message === "Delete feito com sucesso!") {
                dispatch(putNotification("DELETE_TRANSACTION_SUCCESS"))
                setItems(items.filter(item => item.id !== id))
            } else {
                dispatch(putNotification("DELETE_TRANSACTION_ERROR"))
                
            }
        } catch {
            dispatch(putNotification("DELETE_TRANSACTION_ERROR"))

        }
        
    }

    useEffect(() => {

        const getTransacoes = async () => {
            const res = await getTransactions(user.email, props.location.state.id,localStorage.getItem("authToken"))
            if(res) {
                setItems(res.data.transactions)
            }
        }
        
        if(props.location.state === undefined) {
            history.push("/")
        } else {
            getTransacoes()
        }
    // eslint-disable-next-line
    },[])

    if(props.location.state === undefined) {
        return <></>
    }

    return (
        <div className="mainDashboard">
            <div className="mainDashboardContents">
                <h1>Conta: {props.location.state.nome}</h1>
                <small>Descricao: {props.location.state.descricao}</small>
                <NewItem accountId={props.location.state.id} handleNewItem={handleNewItem}/>
                <ItemsTable handleUpdate={handleUpdate} handleDelete={handleDelete} items={items}/>
            </div>
        </div>
    );
}

export default Dashboard;
