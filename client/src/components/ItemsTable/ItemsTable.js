import React, {useEffect,useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './ItemsTable.css'

const ItemsTable = ({items,handleDelete}) => {
    const [allItems,setAllItems] = useState([])

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

    useEffect(() => {
        items.map((item,index) => {
            var res = new Date(item.dataMomento)
            return items[index].dataMomento = res
        })
        setAllItems(items.sort((a,b) => b.dataMomento - a.dataMomento))
    },[items])

    return (
        <div className="mainItemsTable">
            <div className="mainItemsTableContents">
                <table>
                    <tbody>
                        <tr key={-1}>
                            <th>Numero</th>
                            <th>Titulo</th>
                            <th>Descrição</th>
                            <th>Modalidade</th>
                            <th>Tipo</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Edição</th>
                        </tr>
                        {allItems.map((item,index) => {
                            return (
                                <>
                                <tr className={item.tipo} key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.modalidade}</td>
                                    <td>{item.tipo}</td>
                                    <td>R${item.valor}</td>
                                    <td>{formatDate(item.dataMomento)}</td>
                                    <td><EditIcon className="cursor"/><DeleteIcon onClick={() => {handleDelete(item.id)}} className="cursor"/></td>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemsTable;
