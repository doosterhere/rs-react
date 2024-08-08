import classes from './page.module.css';

import { BASE_API } from '../constants';
import { DefaultResponseType, PlanetType } from '../types';
import { SearchBar } from '../components/SearchBar';
import { List } from '../components/List';
import { Pagination } from '../components/Pagination';
import { Flyout } from '../components/Flyout';
import { ListItemDetailed } from '../components/ListItemDetailed';

async function getPlanets(search: string, page: string): Promise<DefaultResponseType<PlanetType>> {
  const response = await fetch(`${BASE_API}/planets/?search=${search}&page=${page}`);

  if (!response.ok) {
    throw new Error('Failing to fetch data');
  }

  return response.json();
}

async function getPlanet(id: string): Promise<PlanetType> {
  const response = await fetch(`${BASE_API}/planets/${id}`);

  if (!response.ok) {
    throw new Error('Failing to fetch data');
  }

  return response.json();
}

export default async function HomeWrapper({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { search, page, detail } = searchParams;
  const data = await getPlanets(search || '', page || '1');
  let detailedData = {} as PlanetType;

  if (detail) {
    detailedData = await getPlanet(detail);
  }

  return (
    <>
      <div className="container">
        <SearchBar />
        <div className={classes.content}>
          <div className={classes.list}>
            {data && data.results.length > 0 && <List itemsList={data.results} />}
            {data && data.results.length === 0 && <div>No results</div>}
          </div>
          {detail && (
            <div className={classes.details}>
              <ListItemDetailed data={detailedData} />
            </div>
          )}
        </div>
        {data && data.count > 10 && <Pagination itemsCount={data.count} />}
      </div>
      <Flyout />
    </>
  );
}
