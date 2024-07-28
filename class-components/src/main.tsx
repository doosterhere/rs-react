import ReactDOM from 'react-dom/client';
import './main.css';
import { ErrorBoundary, AppRouter } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <AppRouter />
  </ErrorBoundary>,
);
