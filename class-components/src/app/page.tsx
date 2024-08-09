import { BASE_API } from '@/constants';
import { DefaultResponseType, PlanetType } from '@/types';
import { MainContent } from '@/components/MainContent';

type Props = {
  searchParams: { [key: string]: string };
};

export async function getPlanets(search: string, page: string): Promise<DefaultResponseType<PlanetType>> {
  const response = await fetch(`${BASE_API}/planets/?search=${search}&page=${page}`);

  if (!response.ok) {
    throw new Error('Failing to fetch data');
  }

  return response.json();
}

export default async function HomePage({ searchParams }: Props) {
  const { search, page } = searchParams;
  const data = await getPlanets(search || '', page || '1');

  return <MainContent data={data} />;
}
