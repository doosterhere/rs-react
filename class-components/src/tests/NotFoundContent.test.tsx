import { render, screen } from '@testing-library/react';

import { NotFoundContent } from '../components/NotFoundContent';

describe('NotFoundContent', () => {
  it('should render correctly', () => {
    const { container } = render(<NotFoundContent />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/This page doesn't exist/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
