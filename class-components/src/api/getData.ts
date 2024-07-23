import { DefaultResponseType, PlanetType } from '../types';

const getData = async (query: string, page: string): Promise<DefaultResponseType<PlanetType> | void> => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/?search=${query}&page=${page}`);
    const results = await response.json();

    return results;
  } catch (e) {
    console.error(e);
  }
};

const getDetailedData = async (id: string): Promise<PlanetType | void> => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    const result = await response.json();

    return result;
  } catch (e) {
    console.error(e);
  }
};

export { getData, getDetailedData };
