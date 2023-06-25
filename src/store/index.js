import { configureStore } from '@reduxjs/toolkit';

import { animalsReducer, addAnimal, reset } from './slices/animalSlice';

const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});

export { store, addAnimal, reset };
