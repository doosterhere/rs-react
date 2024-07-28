import { HttpResponse, http } from 'msw';
import json from './response.json';

export const handlers = [
  http.get('*/planets*', () => {
    return HttpResponse.json(json);
  }),

  http.get('*/planets/:id*', () => {
    return HttpResponse.json(json);
  }),
];
