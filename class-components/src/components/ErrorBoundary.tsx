import { Component, ReactNode } from 'react';

interface IErrorBoundaryProps {
  fallbackComponent: ReactNode;
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
    console.error(
      `Error in error boundary: ${error}`,
      `Component stack: ${errorInfo.componentStack}`,
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
