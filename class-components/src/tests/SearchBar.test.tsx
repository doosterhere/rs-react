import { act, renderHook, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProvider } from '../utils';
import { SearchBar } from '../components';
import * as planetApi from '../api';
import { mockedPlanets } from './mocks/mockData';

describe('SearchBar', () => {
  const useGetPlanetsQueryMock = jest.spyOn(planetApi, 'useGetPlanetsQuery') as jest.Mock;

  it('should render correctly', async () => {
    const setData = jest.fn();
    useGetPlanetsQueryMock.mockReturnValueOnce({ data: mockedPlanets, fulfilledTimeStamp: undefined });
    const { result } = renderHook(() => useGetPlanetsQueryMock({ search: '', page: '1' }));

    renderWithProvider(<SearchBar setData={setData} />, { initialEntries: ['/?search=&page=1'] });

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeInTheDocument();

    act(() => {
      result.current.fulfilledTimeStamp = 1;
    });

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call setData', async () => {
    const setData = jest.fn();

    renderWithProvider(<SearchBar setData={setData} />, { initialEntries: ['/?search=&page=1'] });

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    expect(setData).toHaveBeenCalled();
  });
});
