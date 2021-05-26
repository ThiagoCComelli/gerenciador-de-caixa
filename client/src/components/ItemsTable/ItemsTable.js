import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './ItemsTable.css'

const ItemsTable = ({items}) => {
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
                        {items.map((item,index) => {
                            return (
                                <>
                                <tr className={item.tipo} key={index}>
                                    <td>{item.numero}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.modalidade}</td>
                                    <td>{item.tipo}</td>
                                    <td>R${item.valor}</td>
                                    <td>{item.data}</td>
                                    <td><EditIcon className="cursor"/><DeleteIcon className="cursor"/></td>
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

// numero	
// titulo	
// descrição	
// modalidade(manual ou recorrente)	
// tipo(entrada ou saida)	
// valor	
// edits(deletar ou modificar)	

export default ItemsTable;
