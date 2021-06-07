import React from 'react';
import ModalNewAccount from './ModalNewAccount/ModalNewAccount'
import ModalEditTransaction from './ModalEditTransaction/ModalEditTransaction'
import './Modal.css'

const Modal = ({component}) => {
    const state = {NEW_POST: <ModalNewAccount props={component.props}/>,EDIT_TRAN: <ModalEditTransaction props={component.props}/>}
    
    return (
        <>
        {state[component.id]}
        </>
    )
}

export default Modal
