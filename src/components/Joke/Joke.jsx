import React from 'react';

import './Joke.scss';

const Joke = () => {
  return (
    <div className='joke'>
      <div className='joke-head'>
        <button>Generate Joke</button>
        <input
          type='text'
          className='form__field'
          placeholder='Enter joke color'
        />
        <button className='apply-btn'>Apply</button>
      </div>
      <div className='joke-content'>
        <ul></ul>
      </div>
    </div>
  );
};

export default Joke;
