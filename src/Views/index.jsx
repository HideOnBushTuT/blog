import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Front from './containers/Front/index';

const RootView = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route component={Front} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default RootView;