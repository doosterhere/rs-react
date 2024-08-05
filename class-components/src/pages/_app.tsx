import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/global.css';

import { store, persistor } from '../store';
import { ThemeProvider } from '../components';
import { ErrorBoundary } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}
