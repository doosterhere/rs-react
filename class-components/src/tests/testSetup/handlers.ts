import { HttpResponse, http } from 'msw';
import { mockedPlanet, mockedPlanets } from './mockData.ts';

export const handlers = [
  http.get('*/planets*', () => {
    return HttpResponse.json(mockedPlanets);
  }),

  http.get('*/planets/1*', () => {
    return HttpResponse.json(mockedPlanet);
  }),
];
