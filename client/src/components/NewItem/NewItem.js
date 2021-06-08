import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {putNotification} from '../../actions'
import {newTransaction} from '../../utils/api/db'
import Tag from '../Tag/Tag'
import './NewItem.css'

const NewItem = ({handleNewItem,account_id}) => {
    const [newItem, setNewItem] = useState({id:0,title:"",description:"",modality:"Manual",type:"Entrada",value:0,date:null,tags:[]})
    const [tags,setTags] = useState([])
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        var transaction = newItem
        transaction.tags = tags

        const res = await newTransaction(account_id,transaction,user,localStorage.getItem("authToken"))

        try {
            if(res.data.account !== undefined) {
                dispatch(putNotification(res.data.status))
                handleNewItem(res.data.account)
            } else {
                dispatch(putNotification(res.data.status))
            }
        } catch {
            dispatch(putNotification(res.data.status))

        }
        

    }

    const handleTags = (e) => {
        if(e.key === "Tab" || e.key === "Enter") {
            e.preventDefault()
            if (e.target.value !== "") {
                setTags([...tags,{title:e.target.value.toLowerCase()}])
                e.target.value = ""
            }
        }
    }

    const handleRemoveTag = (nome) => {
        setTags(tags.filter((tag) => tag !== nome))
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
                        <div className="mainNewItemsTagDiv">
                            {tags.map((tag) => {
                                return <Tag handleRemoveTag={handleRemoveTag} tag={tag} key={tag.id} />
                            })}
                            <input placeholder="Ex: comida" onKeyDown={(e) => {handleTags(e)}} className="mainNewItemsTagInput"></input>
                        </div>
                    </div>
                    <div className="mainNewItemSection">
                        <div className="mainNewItemSectionItem">
                            <span>Modalidade:</span>
                            <select id="modality" onChange={handleChange} name="modalide">
                                <option value="Manual">Manual</option>
                                <option value="Recorrente">Recorrente</option>
                            </select>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Tipo:</span>
                            <select id="type" onChange={handleChange} name="tipo">
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
