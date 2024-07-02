import React from 'react'
import logo_mini_mage from '../assets/img/logo-mini-mage.png'; 
import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <nav>
            <div id="nav-left">
                <img src={logo_mini_mage} alt="Page logo, showing a half upper body Mini Mage with the phrase 'Mini Mage'." className="img-mini-mage"/>
                <ul id="nav-options">
                    <li>News</li>
                    <li>Game Guides</li>
                    <li>Forum</li>
                    <li>Support</li>
                </ul>
            </div>
            <div id="nav-right">
                <CartWidget />
                <button type="button" className="btn-play-now">
                    Play Now!
                </button>
            </div>
        </nav>
    )
};

export default NavBar