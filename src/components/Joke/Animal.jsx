import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Animal.scss';
import { createRandomAnimal } from '../../data/jokeapi';
import { addAnimal, reset } from '../../store';

const Animal = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleGenerateButton = (animal) => {
    dispatch(addAnimal(animal));
  };

  const handleSubmit = () => {
    if (!(input === '')) {
      dispatch(addAnimal(input));
    } else {
      return false;
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const animalList = useSelector((state) => {
    return state.animals;
  });

  const renderedAnimals = animalList.map((joke, index) => {
    return <li key={joke + index}>{joke}</li>;
  });

  return (
    <div className='joke'>
      <div className='joke-head'>
        <button onClick={() => handleGenerateButton(createRandomAnimal())}>
          Generate Animals
        </button>

        <button className='apply-btn' onClick={() => handleReset()}>
          Reset Animals
        </button>
      </div>
      <div className='animal-content'>
        <input
          type='text'
          className='animal-input'
          placeholder='Enter animal'
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='add-btn' onClick={() => handleSubmit()}>
          Add
        </button>
      </div>

      <div className='joke-content'>
        <ul>{renderedAnimals}</ul>
      </div>
    </div>
  );
};

export default Animal;
