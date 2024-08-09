import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';

import { renderWithProvider } from '../utils';
import { SearchBar } from '../components/SearchBar';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: jest.fn(),
}));

describe('SearchBar', () => {
  it('should render correctly', async () => {
    const { container } = renderWithProvider(<SearchBar />);

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should push correct data into query params', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    renderWithProvider(<SearchBar />);

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith('/?search=test&page=1');
  });
});
