import { screen, render, fireEvent } from '@testing-library/react';

import { ErrorBoundary } from '../components/ErrorBoundary';

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

  it('should reload the page when the button is clicked', () => {
    const reloadSpy = jest.spyOn(window.history, 'go').mockImplementationOnce(() => ({
      go: () => jest.fn(),
    }));

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

    expect(reloadSpy).toHaveBeenCalledTimes(1);
  });
});
