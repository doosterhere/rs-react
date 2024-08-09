import { screen, render } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import userEvent from '@testing-library/user-event';
import { useParams, useSearchParams } from 'next/navigation';

import { ListItem } from '../components/ListItem';
import { FullPlanetInfo } from '../types';

jest.mock('react-redux');

jest.mock('next/navigation', () => ({
  __esModule: true,
  useParams: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('ListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with correct href when on the main page', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '' });
    (useSearchParams as jest.Mock).mockReturnValue({ get: () => '' });
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);

    const props = {
      name: 'test',
      id: '1',
    } as FullPlanetInfo;

    const { container } = render(<ListItem {...props} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/detail/1?search=&page=1');
  });

  it('should render with correct href when on the detail page', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (useSearchParams as jest.Mock).mockReturnValue({ get: () => '' });
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);

    const props = {
      name: 'test',
      id: '1',
    } as FullPlanetInfo;

    render(<ListItem {...props} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/?search=&page=1');
  });

  it('should call useDispatch when checkbox is clicked', async () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn());

    const spyUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

    const props = {
      name: 'test',
      id: '2',
    } as FullPlanetInfo;

    render(<ListItem {...props} />);

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);

    expect(spyUseDispatch).toHaveBeenCalled();
  });
});
