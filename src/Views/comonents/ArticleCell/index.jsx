import React from 'react';

import './style.css';

const ArticleListCell = ({ history, data, tags }) => {
    return (
        <div className="articlelistcell_container" onClick={
            () => history.push(`/detail/${data.data_id}`, { id: data.data_id })
        }>
            <div className="content">
                <div className="title">
                    <h2>{data.title} + {tags}</h2>
                </div>
                <p className="summary">
                    This is Article Summary ......
                </p>
                <div>
                    <div className="info">
                        <div className="tag">
                            <h5>发表日期</h5>
                            <div>{data.time}</div>
                        </div>
                    </div>
                </div>
                <span className="lastspan">
                    阅读全文 ...
                </span>
            </div>
        </div>
    );
}

export default ArticleListCell;