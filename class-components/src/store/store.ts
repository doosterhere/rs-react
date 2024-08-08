import { combineReducers, configureStore } from '@reduxjs/toolkit';

import itemsReducer from './reducers/itemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
});

const configStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}),
  });

export { configStore };
export type AppStore = ReturnType<typeof configStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
