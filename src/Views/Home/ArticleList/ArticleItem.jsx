import React from 'react';

import { Link } from 'react-router-dom';

const ArticleItem = ({ title, date, readTime, subtitle }) => {
    return (
        <div className="articleItem" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '30px' }}>
            <header>
                <Link to={`/article/${readTime}`}>
                    <p style={{ marginBottom: 0, fontSize: '30px', fontWeight: 'bold', color: '#ffa7c4' }}>{title}</p>
                </Link>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 0 }}>
                    <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>{date}</p>
                    <p style={{ fontSize: '15px', fontWeight: 'lighter', marginLeft: '15px' }}>{readTime} min read</p>
                </div>
            </header>
            <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{subtitle}</p>
        </div>
    );
}

// class ArticleItem extends React.Component {
//     componentWillMount() {
//         this.props.history.push('/artical');
//     }

//     render() {

//         let { title, date, readTime, subtitle } = this.props;

//         return (

//             <div className="articleItem" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '30px' }}>
//                 <header>
//                     <a style={{ marginBottom: 0, fontSize: '30px', fontWeight: 'bold', color: '#ffa7c4' }}>{title}</a>
//                     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 0 }}>
//                         <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>{date}</p>
//                         <p style={{ fontSize: '15px', fontWeight: 'lighter', marginLeft: '15px' }}>{readTime} min read</p>
//                     </div>
//                 </header>
//                 <p style={{ fontSize: '18px', fontWeight: 'normal' }}>{subtitle}</p>
//             </div>
//         );
//     }
// }

export default ArticleItem;