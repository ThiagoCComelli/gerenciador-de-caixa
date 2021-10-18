import React,{useEffect, useState} from 'react';
import ChartLine from './ChartLine/ChartLine'
import Doughnut from './Doughnut/Doughnut'
import { useSelector } from 'react-redux';
import {getAccountStatus} from '../../utils/api/db'
import './ChartsScreen.css'

const ChartsScreen = ({account_id}) => {
    const [state, setState] = useState(null)
    const user = useSelector(state => state.user)

    useEffect(() => {
        const getData = async () => {
            const res = await getAccountStatus(user.email, account_id, localStorage.getItem("authToken"))
            setState(res.data.data)
        }
        if(account_id) getData()
        // eslint-disable-next-line
    },[account_id])

    if(!state) {
        return <></>
    }

    return (
        <div className="mainCharts">
            <div className="mainChartItem">
                <ChartLine rawData={state['sumMonths']}/>
            </div>
            <span></span>
            <div className="mainChartItem">
                <Doughnut rawData={state['sumTags']}/>
            </div>
        </div>
    );
}

export default ChartsScreen;
