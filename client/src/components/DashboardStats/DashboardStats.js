import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import NewItem from '../NewItem/NewItem'
import ChartLine from '../Charts/ChartLine/ChartLine'
import { getAccountStatus, getAnnotations, deleteAnnotation, deleteAllAnnotations, newAnnotation } from '../../utils/api/db'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {putNotification} from '../../actions';
import './DashboardStats.css'
import { randomstring } from 'randomstring-js';
import { useSelector, useDispatch } from 'react-redux';

const ChartScreenItem = ({data,lastData}) => {
    return (
        <>
            <div className="mainhartScreenItem">
                <div className="mainhartScreenItemContent">
                    <span>
                        :: {data.date}
                    </span>
                    <span>
                        <ArrowForwardIcon style={{fontSize: 15}} /> 
                    </span>
                    <span>
                        R$ {data.month_total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} {data.month_total >= lastData.month_total ? <TrendingUpIcon style={{fontSize: 15, color: "green"}} /> :
                        <TrendingDownIcon style={{fontSize: 15, color: "red"}} />}
                    </span>
                    <span>
                        <ArrowForwardIcon style={{fontSize: 15}} /> 
                    </span>
                    <span>
                        R$ {data.cumulative_sum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} {data.cumulative_sum >= lastData.cumulative_sum ? <TrendingUpIcon style={{fontSize: 15, color: "green"}} /> :
                        <TrendingDownIcon style={{fontSize: 15, color: "red"}} />}
                    </span>
                </div>
            </div>
        </>
    )
}

const ChartScreen = ({rawData,account}) => {

    return (
        <>
        <div className="mainChartScreen">
            <ChartLine rawData={rawData} account={account}/>
            <div className="mainChartScreenInfos">
                <div className="mainChartScreenInfosData">
                    <h2>{account.title}</h2>
                    <small>{account.description}</small>
                    {rawData.length > 0 ? (<>
                        <div className="mainhartScreenItem">
                            <div style={{marginBottom: 10}}>
                                <strong>Data</strong>
                                <strong>Entrada</strong>
                                <strong>Total</strong>
                            </div>
                        </div>
                        {rawData.map((data,index) => {
                            if (index > 0) {
                                return <ChartScreenItem key={randomstring()} data={data} lastData={rawData[index-1]}/>
                            } else {
                                return <ChartScreenItem key={randomstring()} data={data} lastData={data}/>
                            }
                        })}
                    </>) : null }
                </div>
            </div>
        </div>
        </>
    )
}

const ManualControlNewItem = ({handleScreen, handleNewItem}) => {
    const [state,setState] = useState({"title":"","value":0})

    const handleUpdate = (e) => {
        setState({...state,[e.target.id]: e.target.value})
    }

    return (
        <>
            <div className="mainManualControlOptionsNewItem">
                <input id="title" onChange={handleUpdate} type="text" placeholder="Nome"></input>
                <input id="value" onChange={handleUpdate} type="number" placeholder="Valor"></input>
                <div className="mainManualControlOptionsNewItemBttns">
                    <button onClick={() => {handleScreen("ManualControlOptions")}}>Voltar</button>
                    <button onClick={() => {handleNewItem(state)}}>Adicionar</button>
                </div>
            </div>
        </>
    )
}

const ManualControlOptions = ({handleScreen,handleDeleteAll}) => {

    return (
        <>
            <div className="manualControlOptions">
                <span onClick={() => {handleScreen("ManualControlNewItem")}}>Novo item</span>
                <span onClick={() => {handleDeleteAll()}}>Limpar items</span>
            </div>
        </>
    )
}

const ManualControlContents = ({items, handleDelete}) => {

    const ContentItem = ({item,index}) => {
        return (
            <>
                <span>
                    <HighlightOffIcon key={randomstring()} onClick={() => {handleDelete(item.id)}} className="tagIcon" style={{cursor: "pointer",fontSize: 15, color: "#000"}}/>
                    {item.title} <strong>R${item.value}</strong>
                </span> {index === items.length-1 ? "=" : "+"}
            </>
        )
    }

    return (
        <>
        {items !== undefined ? items.map((item, index) => {
            return (<ContentItem key={item.id} index={index} item={item}/>)
        }) : null}
        {<span style={{borderColor: "#4286F5"}}>Total <strong>R${items.reduce((a, b) => a + b.value, 0).toFixed(2)}</strong></span>}
        </>
    )
}

const ManualControl = ({accountId}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [actualScreen, setActualScreen] = useState("ManualControlOptions")
    const [items, setItems] = useState([])

    const handleScreen = (screenName) => {
        setActualScreen(screenName)
    }

    const handleDelete = async (id) => {
        const res = await deleteAnnotation(user.email, accountId, id, localStorage.getItem("authToken"))
        if(res.data.status.status === "success") {
            dispatch(putNotification(res.data.status))
            setItems(items.filter((item) => item.id !== id))
        }
    }

    const handleDeleteAll = async () => {
        const res = await deleteAllAnnotations(user.email, accountId, localStorage.getItem("authToken"))
        if(res.data.status.status === "success") {
            setItems([])
        }
    }

    const handleNewItem = async ({value,title}) => {
        const res = await newAnnotation(user, accountId, parseFloat(value), title, localStorage.getItem("authToken"))
        if(res.data.status.status === "success") {
            dispatch(putNotification(res.data.status))
            setItems([...items,res.data.annotation])
        }
    }

    // eslint-disable-next-line
    const screen = {
        "ManualControlOptions": <ManualControlOptions handleDeleteAll={handleDeleteAll} handleScreen={handleScreen}/>,
        "ManualControlNewItem": <ManualControlNewItem handleNewItem={handleNewItem} handleScreen={handleScreen}/>
    }

    useEffect(() => {
        const getAnnotationsAPI = async () => {
            const res = await getAnnotations(user.email, accountId,localStorage.getItem("authToken"))
            if(res) {
                setItems(res.data.annotations)
            }
        }

        getAnnotationsAPI()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="mainManualControl">
                <div className="mainManualControlOptions">
                    <h3 onClick={() => {handleNewItem({value: "34", title: "sdf"})}}>Gastos - Anotações</h3>
                    {screen[actualScreen]}
                </div>
                <div className="mainManualControlContents">
                    <ManualControlContents items={items} handleDelete={handleDelete}/>
                </div>
            </div>
        </>
    )
}

function DashboardStats({account,handleNewItem}) {
    const history = useHistory()
    const [currentScreen, setCurrentScreen] = useState("Status")
    const [rawData,setRawData] = useState([])
    const screens = {
        "Status": <ChartScreen rawData={rawData} account={account}/>,
        "NewItem": <NewItem account_id={account.id} handleNewItem={handleNewItem}/>,
        "ManualControl": <ManualControl accountId={account.id}/>
    }

    const handleScreen = (screen) => {
        setCurrentScreen(screen)
    }

    const getAccountStatusFromAPI = async () => {
        const res = await getAccountStatus(account.user_email,account.id,localStorage.getItem("authToken"))
        try {
            setRawData(res.data.data)
        } catch {
            
        }
    }

    useEffect(() => {
        if(account.length !== 0)
            getAccountStatusFromAPI()
        // eslint-disable-next-line
    }, [account])
    
    return (
        <div className="mainDashboardStats">
            <div className="mainDashboardStatsOptions">
                <div>
                    <span onClick={() => {handleScreen("Status")}} className={`${currentScreen === "Status" ? "mainDashboardStatsOptionsActual" : null}`}>Valores</span>
                    <span onClick={() => {handleScreen("ManualControl")}} className={`${currentScreen === "ManualControl" ? "mainDashboardStatsOptionsActual" : null}`}>Controle manual</span>
                    <span onClick={() => {handleScreen("NewItem")}} className={`${currentScreen === "NewItem" ? "mainDashboardStatsOptionsActual" : null}`}>Nova transacao</span>
                </div>
                <div>
                    <span onClick={() => {history.push("/")}}>Voltar</span>
                </div>
            </div>
            <div className="mainDashboardStatsContent">
                {screens[currentScreen]}
            </div>
        </div>
    )
}

export default DashboardStats