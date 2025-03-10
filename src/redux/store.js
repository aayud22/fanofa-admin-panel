import adsReducer from './slices/adsSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import chatReducer from './slices/chatSlice';
import pageReducer from './slices/pageSlice';
import storage from 'redux-persist/lib/storage';
import commonReducer from './slices/commonSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import notificationReducer from './slices/notificationSlice';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user', 'common', 'chat', 'page', 'ads', 'notification'],
};

const rootReducer = combineReducers({
  ads: adsReducer,
  user: userReducer,
  auth: authReducer,
  chat: chatReducer,
  page: pageReducer,
  common: commonReducer,
  notification: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
