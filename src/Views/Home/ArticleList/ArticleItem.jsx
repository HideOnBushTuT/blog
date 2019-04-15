import React from 'react';

const ArticleItem = ({ title, date, readTime, subtitle }) => {
    return (
        <div className="articleItem" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '30px' }}>
            <header>
                <a style={{ marginBottom: 0, fontSize: '30px', fontWeight: 'bold', color: '#ffa7c4' }}>{title}</a>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 0 }}>
                    <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{date}</p>
                    <p style={{ fontSize: '18px', fontWeight: 'normal', marginLeft: '15px' }}>{readTime} min read</p>
                </div>
            </header>
            <p style={{ fontSize: '18px', fontWeight: 'lighter' }}>{subtitle}</p>
        </div>
    );
}

export default ArticleItem;