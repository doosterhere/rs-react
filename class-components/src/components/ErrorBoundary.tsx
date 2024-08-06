import { Component, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<IErrorBoundaryProps> {
  state = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message.toString() };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error in error boundary: ${error}`, `Component stack: ${errorInfo.componentStack}`);
  }

  reloadPage() {
    window.location.assign('/');
  }

  render() {
    return this.state.hasError ? (
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <h1 data-testid="error-boundary">Something went wrong!</h1>
        <button onClick={this.reloadPage} style={{ width: '300px' }}>
          Return to main page
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}

export { ErrorBoundary };
