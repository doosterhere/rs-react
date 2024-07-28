import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../utils';
import { SearchBar } from '../SearchBar';
import { mockData } from '../../api';

const mockGetData = jest.mock('../../api/getData.ts', () => ({
  mockData,
}));

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockGetData),
  }),
) as jest.Mock;

describe('SearchBar', () => {
  it('should render correctly', async () => {
    const setData = jest.fn();

    renderWithRouter(<SearchBar setData={setData} />);

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call setData', async () => {
    const setData = jest.fn();

    renderWithRouter(<SearchBar setData={setData} />, { initialEntries: ['/?search='] });

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader);

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    expect(setData).toHaveBeenCalled();

    await waitFor(async () => {
      setTimeout(() => {}, 2000);
    });
  });
});
