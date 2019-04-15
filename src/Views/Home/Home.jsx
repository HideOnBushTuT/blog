import React from 'react';

import Header from './Header';
import PersonInfo from './PersonInfo';
import ArticleList from './ArticleList/ArticleList';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Header /> */}
            <PersonInfo />
            <ArticleList />
        </div>
    );
};

export default Home;