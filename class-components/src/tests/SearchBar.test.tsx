import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import { renderWithProvider } from '../utils';
import { SearchBar } from '../components';

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    query: {},
    pathname: '/',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('SearchBar', () => {
  it('should render correctly', async () => {
    renderWithProvider(<SearchBar />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should push correct data into query params', async () => {
    renderWithProvider(<SearchBar />);

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    expect(useRouter().push).toHaveBeenCalledTimes(1);
    expect(useRouter().push).toHaveBeenCalledWith({ pathname: '/', query: { page: '1', search: 'test' } });
  });
});
