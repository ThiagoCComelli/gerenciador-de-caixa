import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import NewItem from '../NewItem/NewItem'
import ManualControl from '../ManualControl/ManualControl'
import ChartsScreen from '../Charts/ChartsScreen'
import './DashboardStats.css'

const Dashboardstats = ({account, handleNewItem}) => {
    const [currentScreen, setCurrentScreen] = useState("values")
    const history = useHistory()
    const screens = {
        "values": <ChartsScreen account_id={account.id} />,
        "newTransaction": <NewItem account_id={account.id} handleNewItem={handleNewItem}/>,
        "manualControl": <ManualControl account_id={account.id}/>
    }

    const handleScreen = (e) => {
        setCurrentScreen(e.target.id)
    }

    const handlePage = () => {
        history.push('/')
    }

    return (
        <div className="mainDashboardStats">
            <div className="mainDashboardStatsOptions">
                <span onClick={handleScreen} id="values" className={currentScreen === "values" ? "active" : null}>Valores</span>
                <span onClick={handleScreen} id="newTransaction" className={currentScreen === "newTransaction" ? "active" : null}>Novo item</span>
                <span onClick={handleScreen} id="manualControl" className={currentScreen === "manualControl" ? "active" : null}>Controle manual</span>
                <button onClick={handlePage}>Voltar</button>
            </div>
            <div className="mainDashboardStatsContent">
                {screens[currentScreen]}
            </div>
        </div>
    )
}

export default Dashboardstats;
