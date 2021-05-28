import React, { useState } from 'react';
import NewItem from '../../components/NewItem/NewItem'
import ItemsTable from '../../components/ItemsTable/ItemsTable'
import './Dashboard.css'

const Dashboard = () => {
    const [items, setItems] = useState([])

    const handleNewItem = (newItem) => {
        setItems([...items,newItem])
    }

    return (
        <div className="mainDashboard">
            <div className="mainDashboardContents">
                <NewItem handleNewItem={handleNewItem}/>
                <ItemsTable items={items}/>
            </div>
        </div>
    );
}

export default Dashboard;
