import React, {useState, useEffect} from 'react'
import NewItem from '../NewItem/NewItem'
import ChartLine from '../Charts/ChartLine/ChartLine'
import { getAccountStatus } from '../../utils/api/db'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import './DashboardStats.css'

const ChartScreenItem = ({data,special}) => {
    return (
        <>
            <div className="mainhartScreenItem">
                <div>
                    <span>
                        :: {data.date}
                    </span>
                    <ArrowForwardIcon style={{fontSize: 15}} /> 
                    <span>
                        {data.month_total} <TrendingUpIcon style={{fontSize: 15, color: "green"}} />
                    </span>
                    <ArrowForwardIcon style={{fontSize: 15}} /> 
                    <span>
                        {data.cumulative_sum} <TrendingUpIcon style={{fontSize: 15, color: "green"}} />
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
                    <div className="mainhartScreenItem">
                        <div style={{marginBottom: 10}}>
                            <strong>Data</strong>
                            <strong>Entrada</strong>
                            <strong>Total</strong>
                        </div>
                    </div>
                    {rawData.map((data) => {
                        return <ChartScreenItem data={data}/>
                    })}
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