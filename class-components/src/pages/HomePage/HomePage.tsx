import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import classes from './HomePage.module.css';

import { Header, List, Pagination, SearchBar } from '../../components';
import { DefaultResponseType, PlanetType } from '../../types';

const HomePage = () => {
  const [data, setData] = useState<DefaultResponseType<PlanetType>>({
    count: 0,
    results: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ search: searchParams.get('search') || '' });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar setData={setData} />
        <div className={classes.content}>
          <div className={classes.list}>
            {data.results.length > 0 && <List itemsList={data.results} />}
            {data.results.length === 0 && <div>No results</div>}
          </div>
          <div className={classes.details}>
            <Outlet />
          </div>
        </div>
        {data.count > 10 && <Pagination itemsCount={data.count} />}
      </div>
    </>
  );
};

export { HomePage };
