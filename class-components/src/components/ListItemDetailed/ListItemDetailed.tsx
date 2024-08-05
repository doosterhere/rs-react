import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import classes from './ListItemDetailed.module.css';

import { Loader } from '..';
import { useGetPlanetQuery } from '../../api';
import { ThemeContext } from '../ThemeContext';

const ListItemDetailed = () => {
  const { query } = useRouter();
  const { data, fulfilledTimeStamp: loading } = useGetPlanetQuery(query.detail!.toString());
  const { theme } = useContext(ThemeContext);
  const search = query.search?.toString() || '';
  const page = query.page?.toString() || '1';
  const queryString = `search=${search}&page=${page}`;

  return (
    <>
      {!loading ? (
        <Loader />
      ) : (
        <div className={clsx(classes.content, classes[theme.value])}>
          <div>Name: {data?.name}</div>
          <div>Diameter: {data?.diameter}</div>
          <div>Gravity: {data?.gravity}</div>
          <div>Population: {data?.population}</div>
          <div>Climate: {data?.climate}</div>
          <div>Terrain: {data?.terrain}</div>
          <div>Surfase water: {data?.surface_water}</div>
          <Link href={`/?${queryString}`}>Close</Link>
        </div>
      )}
    </>
  );
};

export { ListItemDetailed };
