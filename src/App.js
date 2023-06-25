import React from 'react';

import './App.scss';
import Animal from './components/Joke/Animal';

const App = () => {
  return (
    <div className='app'>
      <div className='app-head'>
        <h2>Animals</h2>
      </div>
      <div className='app-content'>
        <Animal />
      </div>
    </div>
  );
};

export default App;
