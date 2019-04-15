import React from 'react';

const ArticleItem = ({ title, date, readTime, subtitle }) => {
    return (
        <div className="articleItem" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <a><p style={{ fontSize: '30px', fontWeight: 'bold' }}>{title}</p></a>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <p style={{ fontSize: '12px', fontWeight: 'normal' }}>{date} </p>
                <p style={{ fontSize: '12px', fontWeight: 'normal' }}>{readTime} min read</p>
            </div>
            <p3>{subtitle}</p3>
        </div>
    );
}

export default ArticleItem;