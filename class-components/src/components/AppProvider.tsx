'use client';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/global.css';

import { AppStore, persistor, configStore } from '../store/store';
import { ThemeProvider } from '../components/ThemeContext';
import { ErrorBoundary } from './ErrorBoundary';

function AppProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = configStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export { AppProvider };
