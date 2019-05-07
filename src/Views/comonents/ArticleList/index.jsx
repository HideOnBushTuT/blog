import React from 'react';

import ArticleListCell from '../ArticleCell/index';

const items = [{
    data_id: 123,
    key: '123',
    title: '标题',
    time: '2017-10-29',
    viewCount: '100',
    commentCount: '23'
},{
    data_id: 321,
    key: '123332',
    title: '标题2',
    time: '2017-10-29 12:00:00',
    viewCount: '10',
    commentCount: '123'
}];

const ArticleList = ({ history, tags }) => {
    return (
        <div>
            {
                items.map((item, index) => (
                    <ArticleListCell key={index} history={history} data={item} tags={tags} />
                ))
            }
        </div>
    );
}

export default ArticleList;