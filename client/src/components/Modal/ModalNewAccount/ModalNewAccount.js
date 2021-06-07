import React,{useState} from 'react';
import {removePost,putNotification} from '../../../actions'
import {useDispatch} from 'react-redux'
import {newAccount} from '../../../utils/api/db'
import {useSelector} from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import './ModalNewAccount.css'

const ModalNewAccount = ({props}) => {
    const [state,setState] = useState({title:"",description:""})
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(removePost())
    }

    const handleChange = (e) => {
        setState({...state,[e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await newAccount(user,state,localStorage.getItem("authToken"))

        if(res.data.account !== undefined) {
            props.handleUpdate(res.data.account)
            handleClose()
            dispatch(putNotification("NEW_ACCOUNT_SUCCESS"))
        } else {
            dispatch(putNotification("NEW_ACCOUNT_ERROR"))
        }

    }

    return (
        <div className="mainModalNewAccount">
            <CloseIcon onClick={() => {handleClose()}} style={{fontSize: 50}} className="closeIcon"/>
            <form onSubmit={handleSubmit} className="mainModalNewAccountBox">
                <div className="mainModalNewAccountContents">
                    <h2>Nova conta:</h2>
                    <div className="mainModalNewAccountContentsInput">
                        <span>Titulo</span>
                        <input onChange={(e) => {handleChange(e)}} id="title" type="text" required></input>
                    </div>
                    <div className="mainModalNewAccountContentsInput">
                        <span>Descricao</span>
                        <input onChange={(e) => {handleChange(e)}} id="description" type="text" required></input>
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
