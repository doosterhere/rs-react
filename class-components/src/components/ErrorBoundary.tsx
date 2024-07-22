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
    history.go(0);
  }

  render() {
    return this.state.hasError ? (
      <div className="container">
        <h1 data-testid="error-boundary">Something went wrong!</h1>
        <button onClick={this.reloadPage}>Return to main page</button>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
