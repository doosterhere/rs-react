import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProvider } from '../../utils';
import ErrorPage from '../../app/error';

const assignMock = jest.fn();

describe('ErrorPage', () => {
  it('should render correctly', () => {
    renderWithProvider(<ErrorPage error={new Error('Error to fetch data')} />);

    expect(screen.getByText(/Error to fetch data/i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call window.location.assign when button is clicked', async () => {
    jest
      .spyOn(globalThis, 'location', 'get')
      .mockImplementationOnce(() => ({ ...globalThis.location, assign: assignMock }));

    renderWithProvider(<ErrorPage error={new Error('Error to fetch data')} />);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(assignMock).toHaveBeenCalled();
  });
});
