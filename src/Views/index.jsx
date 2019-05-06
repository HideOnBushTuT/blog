import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Header from './comonents/Header/index';
import MenuBar from './comonents/Menus/menus';

const RootView = () => {
    return (
        <div>
            <Header />
            <div className="nav">
                <MenuBar />
            </div>
        </div>
    );
}

export default RootView;