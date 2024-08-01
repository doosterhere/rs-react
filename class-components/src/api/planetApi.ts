import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_API } from '../constants';
import { DefaultResponseType, PlanetType } from '../types';

export const planetApi = createApi({
  reducerPath: 'planetApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  endpoints: builder => ({
    getPlanets: builder.query<DefaultResponseType<PlanetType>, { search: string; page: string }>({
      query: (params: { search: string; page: string }) => ({
        url: 'planets',
        params: {
          search: params.search,
          page: params.page,
        },
      }),
    }),
    getPlanet: builder.query<PlanetType, string>({
      query: (id: string) => ({
        url: `planets/${id}`,
      }),
    }),
  }),
});

export const { useGetPlanetQuery, useGetPlanetsQuery } = planetApi;
