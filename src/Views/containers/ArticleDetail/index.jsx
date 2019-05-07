import React from 'react';

import remark from 'remark';
import reactRender from 'remark-react';

import '../Home/style.css';
import '../../comonents/Header/style.css';
import './style.css';


const articleContent = "## 标题 \n```code``` \n 23333333333333333"

const ArticleDetail = () => {
    return (
        <div className="header_container">
            <div className="header">
                <h1>文章标题</h1>
            </div>
            <div className="main">
                <div id="preview" className="main">
                    <div className="markdown_body">
                        { remark().use(reactRender).processSync(articleContent).contents }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetail;