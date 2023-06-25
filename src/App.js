import React from 'react';

import './App.scss';
import Joke from './components/Joke/Joke';

const App = () => {
  return (
    <div className='app'>
      <div className='app-head'>
        <h2>Jokes</h2>
      </div>
      <div className='app-content'>
        <Joke />
      </div>
    </div>
  );
};

export default App;
