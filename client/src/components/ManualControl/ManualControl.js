import React, {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {putNotification} from '../../actions/index'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {getAnnotations,newAnnotation,deleteAnnotation,deleteAllAnnotations} from '../../utils/api/db'
import './ManualControl.css'

const AnnotationItem = ({item,handleDelete}) => {
    return (
        <div className="mainAnnotationItem">
            <HighlightOffIcon onClick={() => {handleDelete(item.id)}} className="mainAnnotationItemDelete"/>
            <span>{item.title}</span>
            <strong>R${item.value}</strong>
        </div>
    )
}

const ManualControl = ({account_id}) => {
    const [annotations,setAnnotations] = useState([])
    const [state,setState] = useState({title:null,value:null,id:account_id})
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleNewAnnotation = async () => {
        if (state.title && state.value) {
            const res = await newAnnotation(user,state,localStorage.getItem("authToken"))
            try {
                if (res.data.status.status === "success") {
                    dispatch(putNotification(res.data.status))
                    setAnnotations([...annotations,res.data.annotation])
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    const handleDelete = async (id) => {
        const res = await deleteAnnotation(user.email,account_id,id,localStorage.getItem("authToken"))
        try {
            if (res.data.status.status === "success") {
                dispatch(putNotification(res.data.status))
                setAnnotations(annotations.filter((item) => item.id !== parseInt(res.data.annotationId)))
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeleteAll = async () => {
        const res = await deleteAllAnnotations(user.email,account_id,localStorage.getItem("authToken"))
        try {
            if (res.data.status.status === "success") {
                dispatch(putNotification(res.data.status))
                setAnnotations([])
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const getData = async () => {
            const res = await getAnnotations(user.email, account_id, localStorage.getItem("authToken"))
            try {
                setAnnotations(res.data.annotations)
            } catch (e) {
                console.log(e)
            }
        }
        getData()
        // eslint-disable-next-line
    }, [account_id])

    return (
        <div className="mainManualControl">
            <div className="mainManualControlBoxes">
                <div className="mainManualControlInputDiv">
                    <SearchOutlinedIcon />
                    <input onChange={(e) => {setState({...state,title:e.target.value})}} type="text" placeholder="Ex:. iFood"/>
                    <input onChange={(e) => {setState({...state,value:parseInt(e.target.value)})}} type="number" placeholder="Valor"/>
                </div>
                <div className="mainManualControlInputButtons">
                    <button onClick={handleDeleteAll}>Limpar</button>
                    <button onClick={handleNewAnnotation}>Enviar</button>
                </div>
                <hr/>
                <div className="mainManualControlAnnItems">
                    {annotations.map((item) => {
                        return (
                            <AnnotationItem handleDelete={handleDelete} key={item.id} item={item}/>
                        )
                    })}
                </div>
                <div className="mainManualControlAnnItemsTotal">
                    <span>Total:</span>
                    <strong>R${annotations.length !== 0 ? annotations.reduce((prevItem,item) => {return prevItem + item.value}, 0) : 0}</strong>
                </div>
            </div>
            <div className="mainManualControlBoxes">
                <textarea placeholder="Sem Anotações até o momento :("></textarea>
            </div>
        </div>
    );
}

export default ManualControl;
