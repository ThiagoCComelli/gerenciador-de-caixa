import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {removePost,putNotification} from '../../../actions'
import {newTag,deleteTag,updateTransaction} from '../../../utils/api/db'
import CloseIcon from '@material-ui/icons/Close';
import Tag from '../../Tag/Tag'
import './ModalEditTransaction.css'

const ModalEditTransaction = ({props}) => {
    const [state, setState] = useState({id:props.item.id,title:props.item.title,description:props.item.description,modality:props.item.modality,type:props.item.type,value:props.item.value})
    const [tags,setTags] = useState([])
    const user = useSelector(state => state.user)
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
    
        return [year, month, day].join('-');
    }

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value})
    }

    const handleClose = () => {
        dispatch(removePost())
    }

    const handleTags = (e) => {
        if(e.key === "Tab" || e.key === "Enter") {
            e.preventDefault()
            if (e.target.value !== "") {
                const res = async () => {
                    return await newTag(e.target.value.toLowerCase(),user,props.item,localStorage.getItem("authToken"))
                } 

                try {
                    res().then((data) => {
                        setTags([...tags,data.data.tag])
                    })
                } catch {
                    
                }
                
                e.target.value = ""
            }
        }
    }

    const handleRemoveTag = (state) => {
        const res = async () => {
            return await deleteTag(user.email,state.id,localStorage.getItem("authToken"))
        } 

        res().then((data) => {
            try {
                if(data.data.tag !== null) {
                    // eslint-disable-next-line
                    setTags(tags.filter((tag) => tag.id != data.data.tag.id))
                }
            } catch {
                dispatch(putNotification(res.data.status))
            }
            
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await updateTransaction(state,user,localStorage.getItem("authToken"))

        try {
            if(res.data.status.code === "EDIT_TRANSACTION_SUCCESS") {
                props.handleUpdate(state)
                dispatch(putNotification(res.data.status))
                dispatch(removePost())
            } else {
                dispatch(putNotification(res.data.status))
                
            }
        } catch {
            // dispatch(putNotification(res.data.status))

        }
        
        
    }

    useEffect(() => {
        setTags(props.item.tags)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="mainModalEditTransaction">
            <CloseIcon onClick={() => {handleClose()}} style={{fontSize: 50}} className="closeIcon"/>
            <form onSubmit={handleSubmit} className="mainModalEditTransactionBox">
                <div className="mainModalEditTransactionContents">
                    <span>Editar transação #{props.item.id}</span>
                    <div className="mainModalEditTransactionSection">
                        <div className="mainModalEditTransactionSectionItem">
                            <span>Titulo:</span>
                            <input onChange={(e) => {handleChange(e)}} defaultValue={props.item.title} id="title" type="text" required></input>
                        </div>
                        <div className="mainModalEditTransactionSectionItem">
                            <span>Descrição:</span>
                            <input onChange={(e) => {handleChange(e)}} defaultValue={props.item.description} id="description" type="text" required></input>
                        </div>
                    </div>
                    <div className="mainModalEditTransactionSection">
                        <div className="mainNewItemsTagDiv">
                            {tags.map((tag) => {
                                return <Tag handleRemoveTag={handleRemoveTag} tag={tag} key={tag.id} />
                            })}
                            <input placeholder="Ex: comida" onKeyDown={(e) => {handleTags(e)}} className="mainNewItemsTagInput"></input>
                        </div>
                    </div>
                    <div className="mainModalEditTransactionSection">
                        <div className="mainModalEditTransactionSectionItem">
                            <span>Modalidade:</span>
                            <select onChange={(e) => {handleChange(e)}} defaultValue={props.item.modality} id="modality" name="modalide">
                                <option value="Manual">Manual</option>
                                <option value="Recorrente">Recorrente</option>
                            </select>
                        </div>
                        <div className="mainModalEditTransactionSectionItem">
                            <span>Tipo:</span>
                            <select onChange={(e) => {handleChange(e)}} defaultValue={props.item.type} id="type" name="tipo">
                                <option value="Entrada">Entrada</option>
                                <option value="Saida">Saida</option>
                            </select>
                        </div>
                        <div className="mainModalEditTransactionSectionItem">
                            <span>Valor:</span>
                            <input onChange={(e) => {handleChange(e)}} defaultValue={props.item.value} id="value" min={0} step="0.01" type="number" required></input>
                        </div>
                        <div className="mainModalEditTransactionSectionItem">
                            <span>Data:</span>
                            <input onChange={() => {}} style={{cursor: "not-allowed"}} onClick={(e) => {e.preventDefault()}} value={formatDate(props.item.date)} id="data" type="date" required></input>
                        </div>
                        <div className="mainModalEditTransactionSectionItem">
                            <span></span>
                            <button className="mainModalEditTransactionConfirm">Confirmar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ModalEditTransaction;
