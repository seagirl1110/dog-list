import { configureStore } from '@reduxjs/toolkit';
import dogReducer from './slices/dogSlice';

const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});

export default store;
