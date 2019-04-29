import React from 'react';

import { Route, BrowserRouter, Link } from 'react-router-dom';

import AritcleItem from './ArticleItem';
import ArticlePage from '../../ArticlePage/ArticlePage';

const articles = [
    { 'title': 'learn React everyday ', 'date': 'March 25, 2019', 'readTime': 4, 'subtitle': 'What is new in React 16.8' },
    { 'title': 'A Complete Guide to useEffect', 'date': 'March 16, 2019', 'readTime': 15, 'subtitle': 'Effects are a part of your data flow.' },
    { 'title': 'How Are Function Components Different from Classes?', 'date': 'February 20, 2019', 'readTime': 20, 'subtitle': 'They’re a whole different Pokémon.' },
];

const ArticleList = () => {
    return (
            <div className="ArticleList" style={{ margin: '40px' }}>
                {
                    articles.map((article) => (
                        // <Route path={article.readTime} render={(article) => {
                        <AritcleItem key={article.title} {...article} />
                        // <div>{article.title}</div>
                        // }} />
                    ))
                }
            </div>
    );
};

export default ArticleList;