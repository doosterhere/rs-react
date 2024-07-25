import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './main.css';

import { store, persistor } from './store';
import { ErrorBoundary, AppRouter } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
);
