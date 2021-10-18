import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';
import './SideNews.css'

const SideNewsHead = ({user,account}) => {
    return (
        <div className="mainSideNewsHead">
            <div className="mainSideNewsHeadProfile">
                <span>&#128640;</span>
                <div className="mainSideNewsHeadText">
                    <h3>{user.name}</h3>
                    <span>{user.email}</span>
                </div>
            </div>
            <hr/>
            <div className="mainSideNewsHeadStats">
                <strong>#<span>{account.id}</span></strong>
                <div className="mainSideNewsHeadStatsText">
                    <b>{account.title}</b>
                    <b>{account.description}</b>
                </div>
            </div>
        </div>
    )
}

const SideNewsMoney = () => {
    const [state,setState] = useState(false)

    const handleActive = () => {
        setState(!state)
    }

    return (
        <div className={`mainSideNewsMoney ${state ? "active" : null}`}>
            <h4 onClick={handleActive}>Economia Mundial: {!state ? <ExpandLessIcon style={{cursor: "pointer"}}/> : <ExpandMoreIcon style={{cursor: "pointer"}}/>}</h4>
            <div className="mainSideNewsMoneyItem">
                <img src={`${process.env.PUBLIC_URL}/images/usd.svg`} alt="usd"></img>
                <div className="mainSideNewsMoneyItemText">
                    <h3>Dolar <ArrowDropUpIcon className="up"/></h3>
                    <span>= 5.87 R$</span>
                </div>
                <LinkIcon className="button"/>
            </div>
            <div className="mainSideNewsMoneyItem">
                <img src={`${process.env.PUBLIC_URL}/images/euro.svg`} alt="usd"></img>
                <div className="mainSideNewsMoneyItemText">
                    <h3>Euro <ArrowDropDownIcon className="down"/></h3>
                    <span>= 6.45 R$</span>
                </div>
                <LinkIcon className="button"/>
            </div>
            <div className="mainSideNewsMoneyItem">
                <img src={`${process.env.PUBLIC_URL}/images/btc.svg`} alt="usd"></img>
                <div className="mainSideNewsMoneyItemText">
                    <h3>Bitcoin <ArrowDropUpIcon className="up"/></h3>
                    <span>= 342.268,66 R$</span>
                </div>
                <LinkIcon className="button"/>
            </div>
        </div>
    )
}

const SideNews = ({account}) => {
    const user = useSelector(state => state.user)

    return (
        <div className="mainSideNews">
            <SideNewsHead account={account} user={user}/>
            <SideNewsMoney />
        </div>
    )
}

export default SideNews;
