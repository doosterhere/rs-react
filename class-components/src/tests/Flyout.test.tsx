import 'whatwg-fetch';
import { screen, render } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import userEvent from '@testing-library/user-event';

import { Flyout } from '../components';
import { clearSelectedItems } from '../store';

jest.mock('react-redux');

describe('Flyout', () => {
  it('should render correctly', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('1');

    const { container } = render(<Flyout />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText('Selected items: 1')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should show and hide confirmation dialog', async () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('1');

    render(<Flyout />);

    const unselect = screen.getByRole('button', { name: 'Unselect all' });

    await userEvent.click(unselect);

    expect(screen.getByText('Are you sure?')).toBeInTheDocument();

    const cancel = screen.getByRole('button', { name: 'No way!' });

    await userEvent.click(cancel);

    expect(screen.queryByText('Selected itesms: 1')).not.toBeInTheDocument();
  });

  it('should call dispatcher with proper action to unselect all items', async () => {
    const dispatch = jest.fn();
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('1');
    const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
    mockedDispatch.mockReturnValue(dispatch);

    render(<Flyout />);

    const unselect = screen.getByRole('button', { name: 'Unselect all' });

    await userEvent.click(unselect);

    expect(screen.getByText('Are you sure?')).toBeInTheDocument();

    const confirm = screen.getByRole('button', { name: 'Absolutely!' });

    await userEvent.click(confirm);

    expect(dispatch).toHaveBeenCalledWith(clearSelectedItems());
  });

  it('<CSVLink> should have correct filename', async () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('7');

    render(<Flyout />);

    expect(screen.getByTestId('csvlink')).toHaveAttribute('download', '7_planets.csv');
  });
});
