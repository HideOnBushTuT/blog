import React from 'react';
import ReactDOM from 'react-dom';

// import Home from './Views/Home/Home';
import Root from './Views/index';

const App = () => {
    return (
      <div className="container">
        <Root />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
