import { useState, useEffect, useContext } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import clsx from 'clsx';

import classes from './HomePage.module.css';

import { Header, List, Pagination, SearchBar, Flyout } from '../../components';
import { DefaultResponseType, PlanetType } from '../../types';
import { ThemeContext } from '../../components/ThemeContext';

const HomePage = () => {
  const [data, setData] = useState<DefaultResponseType<PlanetType>>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setSearchParams({ search: searchParams.get('search') || '' });
  }, []);

  return (
    <main className={clsx(classes.main, classes[theme.value])}>
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
      <Flyout></Flyout>
    </main>
  );
};

export { HomePage };
