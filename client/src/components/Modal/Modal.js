import React from 'react';
import ModalNewAccount from './ModalNewAccount/ModalNewAccount'
import './Modal.css'

const Modal = ({component}) => {
    const state = {NEW_POST: <ModalNewAccount />}
    
    return (
        <>
        {state[component]}
        </>
    )
}

export default Modal
