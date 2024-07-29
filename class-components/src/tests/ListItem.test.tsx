import { screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../utils';
import { ListItem } from '../components';
import { FullPlanetInfo } from '../types';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

jest.mock('react-redux');

describe('ListItem', () => {
  it('should render with correct href when id matches', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);
    const props = {
      id: '1',
      name: 'test',
    } as FullPlanetInfo;

    renderWithRouter(<ListItem {...props} />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('should render with correct href when id does not match', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);
    const props = {
      name: 'test',
      id: '2',
    } as FullPlanetInfo;

    renderWithRouter(<ListItem {...props} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/detail/2');
  });

  it('should call useDispatch when checkbox is clicked', async () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn());

    const spyUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

    const props = {
      name: 'test',
      id: '2',
    } as FullPlanetInfo;

    renderWithRouter(<ListItem {...props} />);

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);

    expect(spyUseDispatch).toHaveBeenCalled();
  });
});
