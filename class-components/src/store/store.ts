import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import itemsReducer from './reducers/itemsReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  items: itemsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
      }),
  });

const persistor = persistStore(configStore());

export { configStore, persistor };
export type AppStore = ReturnType<typeof configStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
