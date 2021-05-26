import React, { useState } from 'react';
import NewItem from '../../components/NewItem/NewItem'
import ItemsTable from '../../components/ItemsTable/ItemsTable'
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([])

    const handleNewItem = (newItem) => {
        setItems([...items,newItem])
    }

    return (
        <div className="mainHome">
            <div className="mainHomeContents">
                <NewItem handleNewItem={handleNewItem}/>
                <ItemsTable items={items}/>
            </div>
        </div>
    );
}

export default Home;
