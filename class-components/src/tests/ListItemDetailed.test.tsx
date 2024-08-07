import { screen } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import { ListItemDetailed } from '../components';
import { PlanetType } from '../types';
import { mockedPlanet } from './testSetup/mockData';

describe('ListItemDetailed', () => {
  it('should renders correct data', async () => {
    renderWithProvider(<ListItemDetailed data={mockedPlanet} />);

    expect(screen.getByText(/Mocked Planet/i)).toBeInTheDocument();
  });

  it('should render correctly with no data received', async () => {
    renderWithProvider(<ListItemDetailed data={{} as PlanetType} />);

    expect(screen.queryByText(/Mocked Planet/i)).not.toBeInTheDocument();
  });
});
