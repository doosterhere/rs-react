import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { renderWithRouter } from '../../utils';

import ListItemDetailed from '../ListItemDetailed';
import * as apiMock from '../../api';

const details = {
  name: 'test-planet',
  rotation_period: '1000',
  orbital_period: '900',
  diameter: '800',
  climate: 'test-climate',
  gravity: '700',
  terrain: 'test-terrain',
  surface_water: '600',
  population: '500',
};

const apiSpy = jest.spyOn(apiMock, 'getDetailedData');
apiSpy.mockResolvedValue(details);

describe('ListItemDetailed', () => {
  it('should renders correct data', async () => {
    renderWithRouter(<ListItemDetailed />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'));

    expect(screen.getByText(/test-planet/i)).toBeInTheDocument();
  });
});
