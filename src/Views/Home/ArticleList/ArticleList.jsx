import React from 'react';

import AritcleItem from './ArticleItem';

const articles = [
    { 'title': 'learn React everyday ', 'date': 'March 25,2019', 'time': 4, 'subtitle': 'What is new in React 16.8' },
    { 'title': 'A Complete Guide to useEffect', 'date': 'March 16,2019', 'time': 15, 'subtitle': 'Effects are a part of your data flow.' },
    { 'title': 'How Are Function Components Different from Classes?', 'date': 'February 20,2019', 'time': 20, 'subtitle': 'They’re a whole different Pokémon.' },
];

const ArticleList = () => {
    return (
        <div className="ArticleList" style={{ margin: '40px' }}>
            {
                articles.map((article) => (
                   <AritcleItem key={article.title} title={article.title} date={article.date} readTime={article.time} subtitle={article.subtitle} />
                ))
            }
        </div>
    );
};

export default ArticleList;