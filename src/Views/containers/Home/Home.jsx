import React from 'react';

import Header from '../../comonents/Header/index';
import Menus from '../../comonents/Menus/menus';
import ArticleList from '../../comonents/ArticleList/index';
import './style.css';

const Home = ({ history, tags }) => {
    return (
        <div className="header_container">
            <Header />
            <div className="nav">
                <Menus history={history} />
            </div>
            <div className="main">
                <ArticleList history={history} tags={tags} />
            </div>
        </div>
    );
}

export default Home;