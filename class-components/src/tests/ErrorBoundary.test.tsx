import { screen, render, fireEvent } from '@testing-library/react';

import { ErrorBoundary } from '../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  let consoleError: jest.SpyInstance;

  beforeEach(() => {
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

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

  it('should reload the page when the button is clicked', () => {
    const ThrowError = () => {
      throw new Error('Test error boundary');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(window.location).toHaveProperty('pathname', '/');
  });
});
