import React from 'react';

import logo from '../../Asserts/Head/logo.png';

const Head = () => {
    return (
        <div>
            <img src={logo} alt="Logo" width={30} height={30}/>
            <h3>I explain with words and code !</h3>
        </div>
    );
}

export default Head;
