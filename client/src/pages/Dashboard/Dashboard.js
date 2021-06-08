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
            if(res.data.status.code === "DELETE_TRANSACTION_SUCCESS") {
                console.log(0)
                dispatch(putNotification(res.data.status))
                setItems(items.filter(item => item.id !== id))
            } else {
                dispatch(putNotification(res.data.status))
                
            }
        } catch {
            dispatch(putNotification(res.data.status))

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
                <h1>Conta: {props.location.state.title}</h1>
                <small>Descrição: {props.location.state.description}</small>
                <NewItem account_id={props.location.state.id} handleNewItem={handleNewItem}/>
                <ItemsTable handleUpdate={handleUpdate} handleDelete={handleDelete} items={items}/>
            </div>
        </div>
    );
}

export default Dashboard;
