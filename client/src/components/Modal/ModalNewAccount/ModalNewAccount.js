import React from 'react';
import {removePost} from '../../../actions'
import {useDispatch} from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import './ModalNewAccount.css'

const ModalNewAccount = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(removePost())
    }

    return (
        <div className="mainModalNewAccount">
            <CloseIcon onClick={() => {handleClose()}} style={{fontSize: 50}} className="closeIcon"/>
            <form className="mainModalNewAccountBox">
                <div className="mainModalNewAccountContents">
                    <h2>Nova conta:</h2>
                    <div className="mainModalNewAccountContentsInput">
                        <span>Titulo</span>
                        <input type="text" required></input>
                    </div>
                    <div className="mainModalNewAccountContentsInput">
                        <span>Descricao</span>
                        <input type="text" required></input>
                    </div>
                    <div className="mainModalNewAccountContentsButton">
                        <button type="submit">Criar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ModalNewAccount
