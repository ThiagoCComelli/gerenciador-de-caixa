import React from 'react';
import {useHistory} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const history = useHistory()

    return (
        <div className="mainNavbar">
            <div className="mainNavbarContents">
                <h2 onClick={() => {history.push("/")}}>Gerenciador de caixa</h2>
            </div>
        </div>
    );
}

export default Navbar;
