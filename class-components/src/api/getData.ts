import { DefaultResponseType, PlanetType } from '../types';

const getData = async (query: string, page: string): Promise<DefaultResponseType<PlanetType> | void> => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/?search=${query}&page=${page}`);

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const getDetailedData = async (id: string): Promise<PlanetType | void> => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export { getData, getDetailedData };
