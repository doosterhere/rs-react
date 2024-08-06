import { screen, render, fireEvent } from '@testing-library/react';

import { ErrorBoundary } from '../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render errorBoundary when throwing an error', () => {
    const ThrowError = () => {
      throw new Error('Test error boundary');
    };

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('error-boundary')).toBeVisible();

    consoleErrorMock.mockRestore();
  });

  it('should reload the page when the button is clicked', () => {
    const ThrowError = () => {
      throw new Error('Test error boundary');
    };

    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(window.location).toHaveProperty('pathname', '/');

    consoleErrorMock.mockRestore();
  });
});
