// AppProvider.test.tsx
import { render, screen } from '@testing-library/react';

import { AppProvider } from '@/components/AppProvider';

describe('AppProvider', () => {
  it('renders children correctly', () => {
    render(
      <AppProvider>
        <div>Child Component</div>
      </AppProvider>,
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
