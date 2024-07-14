import PlanetType from './planet.type';

type DefaultResponseType =
  | {
      count: number;
      next: string | null;
      previous: string | null;
      results: PlanetType[];
      detail: never;
    }
  | {
      count: never;
      next: never;
      previous: never;
      results: never;
      detail: string;
    };

export default DefaultResponseType;
