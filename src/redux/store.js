import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './auth/slice';
import tasksSlice from './tasks/slice';
import giftsSlice from './gift/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const giftsPersistConfig = {
  key: 'gifts',
  storage,
  whitelist: ['lastGiftBuy'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    tasks: tasksSlice,
    gifts: persistReducer(giftsPersistConfig, giftsSlice),
  },
  middleware,
});

export const persistor = persistStore(store);
