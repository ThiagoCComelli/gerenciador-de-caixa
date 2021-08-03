import React, {useState, useEffect} from 'react'
import NewItem from '../NewItem/NewItem'
import ChartLine from '../Charts/ChartLine/ChartLine'
import { getAccountStatus } from '../../utils/api/db'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './DashboardStats.css'
import { randomstring } from 'randomstring-js';

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

const ManualControlNewItem = ({handleScreen}) => {
    return (
        <>
            <div className="mainManualControlOptionsNewItem">
                <input type="text" placeholder="Nome"></input>
                <input type="number" placeholder="Valor"></input>
                <div className="mainManualControlOptionsNewItemBttns">
                    <button onClick={() => {handleScreen("ManualControlOptions")}}>Voltar</button>
                    <button>Adicionar</button>
                </div>
            </div>
        </>
    )
}

const ManualControlOptions = ({handleScreen}) => {
    return (
        <>
            <div className="manualControlOptions">
                <span onClick={() => {handleScreen("ManualControlNewItem")}}>Novo item</span>
                <span>Limpar items</span>
            </div>
        </>
    )
}

const ManualControlContents = ({items}) => {
    return (
        <>
        {items !== undefined ? items.map((item, index) => {
            return (
                <>
                    <span>
                        <HighlightOffIcon className="tagIcon" style={{cursor: "pointer",fontSize: 15, color: "#000"}}/>
                        {item.nome} <strong>R${item.value}</strong>
                    </span> {index === items.length-1 ? "=" : "+"}
                </>
            )
        }) : null}
        {<span style={{borderColor: "#4286F5"}}>Total <strong>R${items.reduce((a, b) => a + b.value, 0)}</strong></span>}
        </>
    )
}

const ManualControl = () => {
    const [actualScreen, setActualScreen] = useState("ManualControlOptions")

    const handleScreen = (screenName) => {
        setActualScreen(screenName)
    }

    const [screen, setScreen] = useState({
        "ManualControlOptions": <ManualControlOptions handleScreen={handleScreen}/>,
        "ManualControlNewItem": <ManualControlNewItem handleScreen={handleScreen}/>
    })

    const items = [
        {"nome":"iFood", "value": 15},
        {"nome":"Warframe 4300pl", "value": 100},
        {"nome":"Barbeiro", "value": 25},
        {"nome":"Mercado", "value": 30},
        {"nome":"Pizza", "value": 55},
        {"nome":"Rodizio", "value": 50},
        {"nome":"Bar", "value": 90},
        {"nome":"Role dos brodi", "value": 45},
        {"nome":"iFood", "value": 22},
        {"nome":"Lavagem carro", "value": 43},
        {"nome":"iFood", "value": 15},
        {"nome":"Jogo Steam", "value": 65}
    ]


    return (
        <>
            <div className="mainManualControl">
                <div className="mainManualControlOptions">
                    <h3>Gastos - Anotações</h3>
                    {screen[actualScreen]}
                </div>
                <div className="mainManualControlContents">
                    <ManualControlContents items={items}/>
                </div>
            </div>
        </>
    )
}

function DashboardStats({account,handleNewItem}) {
    const [currentScreen, setCurrentScreen] = useState("Status")
    const [rawData,setRawData] = useState([])
    const screens = {
        "Status": <ChartScreen rawData={rawData} account={account}/>,
        "NewItem": <NewItem account_id={account.id} handleNewItem={handleNewItem}/>,
        "ManualControl": <ManualControl />
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
                <span onClick={() => {handleScreen("Status")}} className={`${currentScreen === "Status" ? "mainDashboardStatsOptionsActual" : null}`}>Valores</span>
                <span onClick={() => {handleScreen("ManualControl")}} className={`${currentScreen === "ManualControl" ? "mainDashboardStatsOptionsActual" : null}`}>Controle manual</span>
                <span onClick={() => {handleScreen("NewItem")}} className={`${currentScreen === "NewItem" ? "mainDashboardStatsOptionsActual" : null}`}>Nova transacao</span>
            </div>
            <div className="mainDashboardStatsContent">
                {screens[currentScreen]}
            </div>
        </div>
    )
}

export default DashboardStats