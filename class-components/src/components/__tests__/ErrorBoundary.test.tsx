import { screen, render } from '@testing-library/react';

import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render errorBoundary when throwing an error', () => {
    const ThrowError = () => {
      throw new Error('Test error boundary');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('error-boundary')).toBeVisible();
  });
});
