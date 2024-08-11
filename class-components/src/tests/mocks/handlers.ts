import { HttpResponse, http } from 'msw';
import { mockPlanets, mockPlanet } from './mockData.ts';

export const handlers = [
  http.get('*/planets*', () => {
    return HttpResponse.json(mockPlanets);
  }),

  http.get('*/planets/1*', () => {
    return HttpResponse.json(mockPlanet);
  }),
];
