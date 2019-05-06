import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Header from './comonents/Header/index';

const RootView = () => {
    return (
        <div>
            <Header />
        </div>
    );
}

export default RootView;