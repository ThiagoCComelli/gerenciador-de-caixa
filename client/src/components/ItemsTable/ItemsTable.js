import React, {useEffect,useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {putPost} from '../../actions'
import {useDispatch} from 'react-redux'
import {randomstring} from 'randomstring-js'
import './ItemsTable.css'

const Item = ({item, handleUpdate, handleDelete}) => {
    const dispatch = useDispatch()

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

    const handleModal = () => {
        dispatch(putPost({id:"EDIT_TRAN",props:{
            item: item,
            handleUpdate: handleUpdate
        }}))
    }

    return (
        <tr className={item.type}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.modality}</td>
            <td>{item.type}</td>
            <td>R${item.value}</td>
            <td>{formatDate(item.date)}</td>
            <td><EditIcon onClick={() => {handleModal()}} className="cursor"/><DeleteIcon onClick={() => {handleDelete(item.id)}} className="cursor"/></td>
        </tr>
    )
}

const ItemsTable = ({items,handleDelete,handleUpdate}) => {
    const [allItems,setAllItems] = useState([])

    useEffect(() => {
        items.map((item,index) => {
            var res = new Date(item.date)
            return items[index].date = res
        })
        setAllItems(items.sort((a,b) => b.date - a.date))
    },[items])

    return (
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
                            <th>Edição</th>
                        </tr>
                        {allItems.map((item) => {
                            return (
                                <Item item={item} items={items} handleUpdate={handleUpdate} handleDelete={handleDelete} key={randomstring()}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemsTable;
