import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {newTransaction} from '../../utils/api/db'
import './NewItem.css'

const NewItem = ({handleNewItem,accountId}) => {
    const [newItem, setNewItem] = useState({id:0,title:"",description:"",model:"Manual",type:"Entrada",value:0,date:null})
    const user = useSelector(state => state.user)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await newTransaction({data:{
            account: {
                id: accountId
            },
            transaction: newItem,
            user: user,
            token: localStorage.getItem("authToken")
        }})

        if(res.data.account !== undefined) {
            handleNewItem(res.data.account)
        }

    }

    const handleChange = (e) => {
        if(e.target.id === "data") {
            var utcDate = new Date(e.target.value).toISOString().slice(0, 19).replace('T', ' ')
            setNewItem({...newItem, [e.target.id]: new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000)})
        } else {
            setNewItem({...newItem, [e.target.id]: e.target.value})
        }
    }

    return (
        <div className="mainNewItem">
            <span>Nova transação:</span>
            <form onSubmit={handleSubmit}>
                <div className="mainNewItemContents">
                    <div className="mainNewItemSection">
                        <div className="mainNewItemSectionItem">
                            <span>Titulo:</span>
                            <input id="title" onChange={handleChange} type="text" required></input>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Descrição:</span>
                            <input id="description" onChange={handleChange} type="text" required></input>
                        </div>
                    </div>
                    <div className="mainNewItemSection">
                        <div className="mainNewItemSectionItem">
                            <span>Modalidade:</span>
                            <select id="model" onChange={handleChange} name="modalide">
                                <option value="Manual">Manual</option>
                                <option value="Recorrente">Recorrente</option>
                            </select>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Tipo:</span>
                            <select id="type" onChange={handleChange} name="modalide">
                                <option value="Entrada">Entrada</option>
                                <option value="Saida">Saida</option>
                            </select>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Valor:</span>
                            <input id="value" onChange={handleChange} min={0} step="0.01" type="number" required></input>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Data:</span>
                            <input id="date" onChange={handleChange} type="date" required></input>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span></span>
                            <button type="submit" className="mainNewItemSectionItemConfirm">Confirmar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewItem;
