import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../utils';
import { List } from '../List';

const itemList = [
  {
    name: 'test-planet-1',
    diameter: '100',
    climate: 'test-climate',
    gravity: '200',
    terrain: 'test-terrain',
    surface_water: '300',
    population: '400',
    url: 'https://swapi.dev/api/planets/1/',
  },
  {
    name: 'test-planet-2',
    diameter: '1100',
    climate: 'test-climate',
    gravity: '1200',
    terrain: 'test-terrain',
    surface_water: '1300',
    population: '1400',
    url: 'https://swapi.dev/api/planets/2/',
  },
];

describe('List', () => {
  it('should renders correctly with data', () => {
    renderWithRouter(<List itemsList={itemList} />);

    expect(screen.getByText(/test-planet-1/i)).toBeInTheDocument();

    expect(screen.getByText(/test-planet-2/i)).toBeInTheDocument();
  });

  it('should renders correctly without data', () => {
    renderWithRouter(<List itemsList={[]} />);

    expect(screen.getByTestId('list').childNodes).toHaveLength(0);
  });
});
