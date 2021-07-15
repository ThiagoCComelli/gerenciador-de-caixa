import React, {useState, useEffect} from 'react'
import NewItem from '../NewItem/NewItem'
import ChartLine from '../Charts/ChartLine/ChartLine'
import { getAccountStatus } from '../../utils/api/db'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
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

function DashboardStats({account,handleNewItem}) {
    const [currentScreen, setCurrentScreen] = useState("Status")
    const [rawData,setRawData] = useState([])
    const screens = {"Status": <ChartScreen rawData={rawData} account={account}/>, "NewItem": <NewItem account_id={account.id} handleNewItem={handleNewItem}/>}

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
                <span onClick={() => {handleScreen("Status")}} className={`${currentScreen === "Status" ? "mainDashboardStatsOptionsActual" : null}`}>Status</span>
                <span onClick={() => {handleScreen("NewItem")}} className={`${currentScreen === "NewItem" ? "mainDashboardStatsOptionsActual" : null}`}>Nova transacao</span>
            </div>
            <div className="mainDashboardStatsContent">
                {screens[currentScreen]}
            </div>
        </div>
    )
}

export default DashboardStats