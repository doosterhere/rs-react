'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

import '../styles/global.css';

import { AppStore, configStore } from '../store/store';
import { ThemeProvider } from '../components/ThemeContext';
import { ErrorBoundary } from './ErrorBoundary';

function AppProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = configStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ErrorBoundary>
        <ThemeProvider>{children}</ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export { AppProvider };
