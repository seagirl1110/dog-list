import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDog = createAsyncThunk('dogs/fetchDog', async () => {
  const response = await axios.get('https://api.thedogapi.com/v1/breeds');
  return response.data;
});
