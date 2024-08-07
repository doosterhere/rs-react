import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import { renderWithProvider } from '../utils';
import { SearchBar } from '../components';

describe('SearchBar', () => {
  it('should render correctly', async () => {
    const { container } = renderWithProvider(<SearchBar />);

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should push correct data into query params', async () => {
    mockRouter.push('/');

    renderWithProvider(<SearchBar />);

    expect(mockRouter).toMatchObject({});

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    expect(mockRouter).toMatchObject({
      pathname: '/',
      query: { page: '1', search: 'test' },
    });
  });
});
