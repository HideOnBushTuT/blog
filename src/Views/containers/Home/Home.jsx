import React from 'react';

import Header from '../../comonents/Header/index';
import Menus from '../../comonents/Menus/menus';
import './style.css';

const Home = ({ history }) => {
    return (
        <div className="header_container">
            <Header />
            <div className="nav">
                <Menus history={history} />
            </div>
        </div>
    );
}

export default Home;