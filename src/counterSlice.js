import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter2',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter2.count;

export default counterSlice.reducer;
