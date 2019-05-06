import React from 'react';

import './style.css';

const logo = require('../../../Asserts/Images/Head/logo.png');

const Header = () => {
    return (
        <div className="header">
            <span className="logo">
                <img src={logo}/>
            </span>
            <h1>CBReno's Blog</h1>
            <p>Follow your heart and find what you love</p>
        </div>
    );
}

export default Header;