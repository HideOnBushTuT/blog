import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { BackTop } from 'antd';

import Home from '../Home/Home';
import NotFound from '../NotFound/index';


const Front = ({ match }) => {
    return (

        <div>
            <div>
                <Switch>
                    <Route exact path={match.url} component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <BackTop />
        </div>
    );
}

export default Front;