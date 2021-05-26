import React, { useState } from 'react';
import './NewItem.css'

const NewItem = ({handleNewItem}) => {
    const [newItem, setNewItem] = useState({numero:0,titulo:"",descricao:"",modalidade:"Manual",tipo:"Entrada",valor:0,data:null})

    const handleSubmit = (e) => {
        e.preventDefault()
        handleNewItem(newItem)
    }

    const handleChange = (e) => {
        setNewItem({...newItem, [e.target.id]: e.target.value})
    }

    return (
        <div className="mainNewItem">
            <span>Nova transação:</span>
            <form onSubmit={handleSubmit}>
                <div className="mainNewItemContents">
                    <div className="mainNewItemSection">
                        <div className="mainNewItemSectionItem">
                            <span>Titulo:</span>
                            <input id="titulo" onChange={handleChange} type="text" required></input>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Descrição:</span>
                            <input id="descricao" onChange={handleChange} type="text" required></input>
                        </div>
                    </div>
                    <div className="mainNewItemSection">
                        <div className="mainNewItemSectionItem">
                            <span>Modalidade:</span>
                            <select id="modalidade" onChange={handleChange} name="modalide">
                                <option value="Manual">Manual</option>
                                <option value="Recorrente">Recorrente</option>
                            </select>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Tipo:</span>
                            <select id="tipo" onChange={handleChange} name="modalide">
                                <option value="Entrada">Entrada</option>
                                <option value="Saida">Saida</option>
                            </select>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Valor:</span>
                            <input id="valor" onChange={handleChange} min={0} type="number" required></input>
                        </div>
                        <div className="mainNewItemSectionItem">
                            <span>Data:</span>
                            <input id="data" onChange={handleChange} type="date" required></input>
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
