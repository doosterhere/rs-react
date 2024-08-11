import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, useTheme } from '../components/ThemeContext';

describe('ThemeContext', () => {
  it('should provide a default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const container = screen.getByTestId('container');

    expect(container).toHaveAttribute('data-theme', 'light');
  });

  it('should toggle the theme when the button is clicked', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const container = screen.getByTestId('container');
    const button = screen.getByRole('button');

    expect(container).toHaveAttribute('data-theme', 'light');

    await userEvent.click(button);

    expect(container).toHaveAttribute('data-theme', 'dark');
  });

  function TestComponent() {
    const { theme, toggleTheme } = useTheme();

    return (
      <div data-theme={theme.value} data-testid="container">
        <button onClick={toggleTheme} role="button">
          Toggle Theme
        </button>
      </div>
    );
  }
});
