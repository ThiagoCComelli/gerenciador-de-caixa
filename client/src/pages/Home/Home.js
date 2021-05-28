import React,{useState,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from 'react-redux'
import {putPost} from '../../actions'
import './Home.css'

const Account = ({conta}) => {
    return (
        <div className="mainHomeContentsItems">
            <div className="mainHomeContentsBox">
                <h4>{conta.titulo}</h4>
                <small>{conta.descricao}</small>
                <span>{conta.id}</span>
            </div>
        </div>
    )
}

const NewAccount = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => {
            dispatch(putPost("NEW_POST"))
        }} className="mainHomeContentsItems">
            <div className="mainHomeContentsBox">
                <AddIcon style={{fontSize: 45}}/>
                <h4>Nova conta</h4>
            </div>
        </div>
    )
}


const Home = () => {
    const [contas,setContas] = useState([{titulo:"Caixa de fluxo da empresa",descricao:"Historico para controle do dinheiro de circulacao dentro da loja",id:12}])
    

    return (
        <div className="mainHome">
            <div className="mainHomeContents">
                <h3>Suas contas:</h3>
                <div className="mainHomeContentsItemsBox">
                    {contas.map((conta) => {
                        return <Account conta={conta}/>
                    })}
                    <NewAccount />
                </div>
            </div>
        </div>
    )
}

export default Home;
