import React, { useState } from 'react';
// import logo
import Logo from '../img/logo.png';
// import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import components
import Hero from './Hero';

function Navbar() {
    return (
        <header>
            <nav>
                <div className="menu">
                    <img src={Logo} alt="the new Netflix killer" id="logo" />
                    <ul className="navbar">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                    </ul>
                </div>
                <div className="member-area">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                    <button id="login">Login Here</button>
                </div>
            </nav>
            <Hero />
        </header>
    )
}

export default Navbar;
