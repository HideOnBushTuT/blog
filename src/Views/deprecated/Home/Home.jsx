import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from './Header';
import PersonInfo from './PersonInfo';
import ArticleList from './ArticleList/ArticleList';
import ArticlePage from '../ArticlePage/ArticlePage';

const Home = () => {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <Header /> */}
                {/* <PersonInfo /> */}
                {/* <ArticleList /> */}
                {/* <Link to={`/article/4`}>4</Link> */}
                <Route path="/article" component={ArticleList}/>
                <Route path="/article/:number" component={ArticlePage}/>
            </div>
        </BrowserRouter>
    );
};

export default Home;