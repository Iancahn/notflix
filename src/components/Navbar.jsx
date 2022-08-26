import React, { useState } from 'react';
// import logo
import Logo from '../img/logo.png';

function Navbar() {
    return (
        <header>
            <nav>
                <div>
                    <img src={Logo} alt="the new Netflix killer" id="logo" />
                    <ul className="navbar">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                    </ul>
                    <button id="login">Login Here</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
