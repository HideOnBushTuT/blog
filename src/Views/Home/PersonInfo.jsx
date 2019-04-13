import React from 'react';

import logo from '../../Asserts/Head/logo.png';

const PersonInfo = () => {
    return (
        <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img src={logo} alt="Logo" width={30} height={30} style={{ borderRadius: '50%' }} />
            <p style={{ marginLeft: 10 }}>This is my personal Blog !</p>
        </div>
    );
}

export default PersonInfo;
