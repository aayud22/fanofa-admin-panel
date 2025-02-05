import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import commonReducer from './slices/commonSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    common: commonReducer,
  },
});

export default store;
