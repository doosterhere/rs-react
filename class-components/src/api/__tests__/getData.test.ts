import { DefaultResponseType, PlanetType } from '../../types';

import { getData, getDetailedData, mockData, mockDetailedData } from '../../api';

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
