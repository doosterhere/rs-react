import { screen } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import { ListItemDetailed } from '../components';
import * as planetApi from '../api';
import { mockedPlanet } from './mocks/mockData';

describe('ListItemDetailed', () => {
  const useGetPlanetQueryMock = jest.spyOn(planetApi, 'useGetPlanetQuery') as jest.Mock;

  it('should renders correct data', async () => {
    useGetPlanetQueryMock.mockReturnValueOnce({ data: mockedPlanet, fulfilledTimeStamp: 1 });

    renderWithProvider(<ListItemDetailed />, { initialEntries: ['/detail/1?search=&page=1'] });

    expect(screen.getByText(/Mocked Planet/i)).toBeInTheDocument();
  });

  it('should render correctly with do data received', async () => {
    useGetPlanetQueryMock.mockReturnValueOnce({ data: {}, fulfilledTimeStamp: 1 });

    renderWithProvider(<ListItemDetailed />, { initialEntries: ['/detail/1?search=&page=1'] });

    expect(screen.queryByText(/Mocked Planet/i)).not.toBeInTheDocument();
  });

  it('should render loader when data is not received', () => {
    useGetPlanetQueryMock.mockReturnValueOnce({ data: mockedPlanet, fulfilledTimeStamp: undefined });

    renderWithProvider(<ListItemDetailed />, { initialEntries: ['/detail/1?search=&page=1'] });

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
