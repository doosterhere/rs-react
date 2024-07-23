import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { renderWithRouter } from '../../utils';

import ListItemDetailed from '../ListItemDetailed';
import * as apiMock from '../../api';

const details = {
  name: 'test-planet',
  diameter: '800',
  climate: 'test-climate',
  gravity: '700',
  terrain: 'test-terrain',
  surface_water: '600',
  population: '500',
  url: 'https://swapi.dev/api/planets/1/',
};

const apiSpy = jest.spyOn(apiMock, 'getDetailedData');
apiSpy.mockResolvedValue(details);

describe('ListItemDetailed', () => {
  it('should renders correct data', async () => {
    renderWithRouter(<ListItemDetailed />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    expect(screen.getByText(/test-planet/i)).toBeInTheDocument();
    expect(screen.getByText(/800/i)).toBeInTheDocument();
    expect(screen.getByText(/test-climate/i)).toBeInTheDocument();
    expect(screen.getByText(/700/i)).toBeInTheDocument();
    expect(screen.getByText(/test-terrain/i)).toBeInTheDocument();
    expect(screen.getByText(/600/i)).toBeInTheDocument();
    expect(screen.getByText(/500/i)).toBeInTheDocument();
  });
});
