import React from 'react';
import ReactDOM from 'react-dom';

// import Home from './Views/Home/Home';
import Roots from './Views/index';

const App = () => {
    return (
      <div className="container">
        <Roots />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
