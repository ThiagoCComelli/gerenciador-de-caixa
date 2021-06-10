import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from 'react-redux'
import {removePost} from '../../../actions'
import './ModalConfirmDelete.css'

const ModalConfirmDelete = ({props}) => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(removePost())
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    console.log(props)

    return (
        <div className="mainModalDeleteOperation">
            <CloseIcon onClick={handleClose} style={{fontSize: 50}} className="closeIcon"/>
            <form onSubmit={handleSubmit} className="mainModalDeleteOperationBox">
                <div className="mainModalDeleteOperationContent">
                    <span>Tem certeza que deseja excluir?</span>
                    <div className="mainModalDeleteOperationContentButtons">
                        <button onClick={props.handleDelete}>Confirmar</button>
                        <button onClick={handleClose}>Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalConfirmDelete
