import { useContext, ReactNode, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import clsx from 'clsx';

import classes from './index.module.css';

import { BASE_API } from '../constants';
import { Header, List, Pagination, SearchBar, Flyout, ThemeContext } from '../components';
import { DefaultResponseType, PlanetType } from '../types';
import { useAppDispatch } from '../hooks';
import { setCurrentPageItems } from '../store';

type Props = {
  children?: ReactNode;
  resData?: DefaultResponseType<PlanetType>;
};

export const getServerSideProps: GetServerSideProps<{ resData: DefaultResponseType<PlanetType> }> = async ({
  query,
}: {
  query: ParsedUrlQuery;
}) => {
  const { search = '', page = '1' } = query;
  const res = await fetch(`${BASE_API}/planets/?search=${search}&page=${page}`);
  const resData = await res.json();

  return { props: { resData } };
};

export default function HomePage({ children, resData }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    if (resData?.results) {
      dispatcher(setCurrentPageItems(resData.results));
    }
  }, [resData, dispatcher]);

  return (
    <main className={clsx(classes.main, classes[theme.value])}>
      <Header />
      <div className="container">
        <SearchBar />
        <div className={classes.content}>
          <div className={classes.list}>
            {resData && resData.results.length > 0 && <List itemsList={resData.results} />}
            {resData && resData.results.length === 0 && <div>No results</div>}
          </div>
          {children}
        </div>
        {resData && resData.count > 10 && <Pagination itemsCount={resData.count} />}
      </div>
      <Flyout />
    </main>
  );
}
