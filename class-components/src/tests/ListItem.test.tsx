import { screen, render } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import userEvent from '@testing-library/user-event';

import { ListItem } from '../components';
import { FullPlanetInfo } from '../types';

jest.mock('react-redux');

describe('ListItem', () => {
  it('should render with correct href when id does not match', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValueOnce(true);

    const props = {
      name: 'test',
      id: '1',
    } as FullPlanetInfo;

    const { container } = render(<ListItem {...props} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/detail/1?search=&page=1');
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
