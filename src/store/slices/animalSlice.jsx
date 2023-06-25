import { createSlice } from '@reduxjs/toolkit';

const animalsSlice = createSlice({
  name: 'animal',
  initialState: [],
  reducers: {
    addAnimal(state, action) {
      state.push(action.payload);
    },
    reset(state, action) {
      return [];
    },
  },
});

export const { addAnimal, reset } = animalsSlice.actions;
export const animalsReducer = animalsSlice.reducer;
