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

// import { transactionsReducer } from './transactions/slice';

import authReduser from './auth/slice';

// import { currencyReducer } from './currency/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const currencyPersistConfig = {
//   key: 'currency',
//   storage,
//   whitelist: ['lastActionTime', 'currencies'],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
  },
  middleware,
});

export const persistor = persistStore(store);
