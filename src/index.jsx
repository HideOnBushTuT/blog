import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Views/Home/Home';

const App = () => {
    return (
      <div className="container">
        <Home/>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
