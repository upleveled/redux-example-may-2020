import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 0,
      firstName: 'Karl',
      lastName: 'Horky',
      role: 'user',
    },
  },
  reducers: {
    updateFirstName: (state) => {
      state.user.firstName = 'Hamed';
    },
  },
});

export const { updateFirstName } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
