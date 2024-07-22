import React from 'react'
import logo_mini_mage from '../assets/img/logo-mini-mage.png'; 
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar({cartItems}) {
    return (
        <nav>
            <div id="nav-left">
                <Link to="/.">
                <img src={logo_mini_mage} alt="Page logo, showing a half upper body Mini Mage with the phrase 'Mini Mage'." className="img-mini-mage"/>
                </Link>
                <ul id="nav-options">
                    <li><Link to="/news"> News </Link></li>
                    <li><Link to="/game-guides"> Game Guides </Link></li>
                    <li><Link to="/forum"> Forum </Link></li>
                    <li><Link to="/support"> Support </Link></li>
                    <li><Link to="/shop"> Shop </Link></li>
                </ul>
            </div>
            <div id="nav-right">
                <Link to="/shop-cart"> <CartWidget cartItems={cartItems}/> </Link>
                <button type="button" className="btn-play-now">
                    Play Now!
                </button>
            </div>
        </nav>
    )
};

export default NavBar