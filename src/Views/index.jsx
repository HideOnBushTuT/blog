import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ArticalPage from './ArticlePage/ArticlePage';
import Home from './Home/Home';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/article" component={Home} />
                <Route path='/article/:time' component={ArticalPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Root;