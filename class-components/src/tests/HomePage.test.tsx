import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { renderWithRouter } from '../utils';
import { HomePage } from '../pages';
import { mockData } from '../api';

describe('HomPage', () => {
  it('should render correctly', async () => {
    globalThis.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      }),
    ) as jest.Mock;

    renderWithRouter(<HomePage />);

    const loader = screen.getByRole('progressbar');

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(screen.getByText(/test-planet-1/i)).toBeInTheDocument();
    expect(screen.getByText(/test-planet-2/i)).toBeInTheDocument();
  });

  it('should render correctly with no data', async () => {
    globalThis.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ count: 0, results: [] }),
      }),
    ) as jest.Mock;

    renderWithRouter(<HomePage />);

    const loader = screen.getByRole('progressbar');

    await waitForElementToBeRemoved(loader);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });
});
