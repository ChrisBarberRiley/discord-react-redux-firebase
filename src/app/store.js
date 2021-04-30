import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
