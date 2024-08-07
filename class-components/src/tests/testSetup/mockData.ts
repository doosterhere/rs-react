import { DefaultResponseType, PlanetType } from '../../types';

const mockedPlanet: PlanetType = {
  name: 'Mocked Planet',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/4/',
    'https://swapi.dev/api/people/6/',
    'https://swapi.dev/api/people/7/',
    'https://swapi.dev/api/people/8/',
    'https://swapi.dev/api/people/9/',
    'https://swapi.dev/api/people/11/',
    'https://swapi.dev/api/people/43/',
    'https://swapi.dev/api/people/62/',
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/1/',
};

const mockedPlanet2: PlanetType = {
  name: 'Mocked Planet 2',
  rotation_period: '34',
  orbital_period: '506',
  diameter: '12000',
  climate: 'severe',
  gravity: '0.1 standard',
  terrain: 'desert',
  surface_water: '0.1',
  population: '2000',
  residents: [],
  films: [],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/2/',
};

const planetsNotFound: DefaultResponseType<PlanetType> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const mockedPlanets: DefaultResponseType<PlanetType> = {
  count: 1,
  next: 'https://swapi.dev/api/planets/?search=&page=2',
  previous: null,
  results: [mockedPlanet, mockedPlanet2],
};

export { mockedPlanet, mockedPlanets, planetsNotFound };
