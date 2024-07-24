import { DefaultResponseType, PlanetType } from '../types';

const mockDetailedData: PlanetType = {
  name: 'test-planet',
  diameter: '100',
  climate: 'test-climate',
  gravity: '200',
  terrain: 'test-terrain',
  surface_water: '300',
  population: '400',
  url: 'https://swapi.dev/api/planets/1/',
};

const mockData: DefaultResponseType<PlanetType> = {
  count: 2,
  results: [
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
  ],
};

export { mockDetailedData, mockData };
