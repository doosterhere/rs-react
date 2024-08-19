import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import formReducer from './reducers/formReducer';
import countriesReducer from './reducers/countriesReducer';

const rootReducer = combineReducers({
  form: formReducer,
  countries: countriesReducer,
});

const configStore = () =>
  configureStore({ reducer: rootReducer, middleware: getDefaultMiddleware => getDefaultMiddleware({}) });

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { configStore, useAppDispatch, useAppSelector };
export type AppStore = ReturnType<typeof configStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
