import { BASE_API } from '@/constants';
import { PlanetType } from '@/types';
import { MainContent } from '@/components/MainContent';
import { getPlanets } from '@/app/page';

type Props = {
  searchParams: { [key: string]: string };
  params: { id: string };
};

async function getPlanet(id: string): Promise<PlanetType> {
  const response = await fetch(`${BASE_API}/planets/${id}`);

  if (!response.ok) {
    throw new Error('Failing to fetch data');
  }

  return response.json();
}

export default async function DetailPage({ searchParams, params: { id } }: Props) {
  const { search, page } = searchParams;
  const data = await getPlanets(search || '', page || '1');
  const detail = await getPlanet(id);

  return <MainContent data={data} detail={detail} />;
}
