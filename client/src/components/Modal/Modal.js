import React from 'react';
import ModalNewAccount from './ModalNewAccount/ModalNewAccount'
import ModalEditTransaction from './ModalEditTransaction/ModalEditTransaction'
import ModalConfirmDelete from './ModalConfirmDelete/ModalConfirmDelete'
import './Modal.css'

const Modal = ({component}) => {
    const state = {CONFIRM_DELETE: <ModalConfirmDelete props={component.props}/>,NEW_POST: <ModalNewAccount props={component.props}/>,EDIT_TRAN: <ModalEditTransaction props={component.props}/>}
    
    return (
        <>
        {state[component.id]}
        </>
    )
}

export default Modal
