import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice';
import userReducer from '../userSlice';

export default configureStore({
  reducer: {
    counter2: counterReducer,
    user: userReducer,
  },
});
