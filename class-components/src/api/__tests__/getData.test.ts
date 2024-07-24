import { DefaultResponseType, PlanetType } from '../../types';

import { getData, getDetailedData } from '../getData';

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
  count: 1,
  results: [mockDetailedData],
};

let data: PlanetType | DefaultResponseType<PlanetType> | void;
let ok: boolean;

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    ok: ok,
    json: () => Promise.resolve(data),
  }),
) as jest.Mock;

describe('getData', () => {
  it('should get data from API', async () => {
    ok = true;
    data = mockData;

    expect(await getData('test', '1')).toEqual(mockData);
  });

  it('should get detailed data from API', async () => {
    data = mockDetailedData;

    expect(await getDetailedData('1')).toEqual(mockDetailedData);
  });
});
