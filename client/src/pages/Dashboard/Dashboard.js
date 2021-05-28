import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {getTransactions,deleteTransaction} from '../../utils/api/db'
import NewItem from '../../components/NewItem/NewItem'
import {useSelector} from 'react-redux'
import ItemsTable from '../../components/ItemsTable/ItemsTable'
import './Dashboard.css'

const Dashboard = (props) => {
    const user = useSelector(state => state.user)
    const [items, setItems] = useState([])
    const history = useHistory()

    const handleNewItem = (newItem) => {
        setItems([...items,newItem])
    }

    const handleDelete = async (id) => {
        const res = await deleteTransaction(user.cpf,id,localStorage.getItem("authToken"))
        
        if(res.data.message === "Delete feito com sucesso!") {
            setItems(items.filter(item => item.id !== id))
        }
    }

    useEffect(() => {

        const getTransacoes = async () => {
            const res = await getTransactions(user.cpf, props.location.state.id,localStorage.getItem("authToken"))
            setItems(res.data.transactions)
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
                <ItemsTable handleDelete={handleDelete} items={items}/>
            </div>
        </div>
    );
}

export default Dashboard;
