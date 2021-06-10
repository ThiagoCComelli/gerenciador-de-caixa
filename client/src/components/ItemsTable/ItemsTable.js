import React, {useEffect,useState} from 'react';
import {putPost,putContext,removeContext} from '../../actions'
import {useDispatch,useSelector} from 'react-redux'
import {randomstring} from 'randomstring-js'
import './ItemsTable.css'

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
            handleDelete: handleDelete_
        }}))
    }

    const handleDelete_ = () => {
        handleDelete(item.id)
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

const ItemsTable = ({items,handleDelete,handleUpdate}) => {
    const [allItems,setAllItems] = useState([])
    const [money,setMoney] = useState(0)

    useEffect(() => {
        var moneyTmp = 0
        items.map((item,index) => {
            item.type === "Saida" ? moneyTmp -= item.value : moneyTmp += item.value
            var res = new Date(item.date)
            return items[index].date = res
        })
        setMoney(moneyTmp)
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
                        </tr>
                        {allItems.map((item) => {
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
    );
}

export default ItemsTable;
