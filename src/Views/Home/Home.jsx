import React from 'react';

import Header from './Header';
import PersonInfo from './PersonInfo';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Header /> */}
            <PersonInfo />
        </div>
    );
};

export default Home;