import { createSlice } from '@reduxjs/toolkit';
import { fetchDog } from '../thunks';

const dogSlice = createSlice({
  name: 'dog',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDog.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dogSlice.reducer;
