import { useContext } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import clsx from 'clsx';

import classes from './ListItemDetailed.module.css';

import { Loader } from '..';
import { useGetPlanetQuery } from '../../api';
import { ThemeContext } from '../ThemeContext';

const ListItemDetailed = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { data, fulfilledTimeStamp: loading } = useGetPlanetQuery(id!);
  const { theme } = useContext(ThemeContext);

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
          <Link to={`/?${searchParams.toString()}`}>Close</Link>
        </div>
      )}
    </>
  );
};

export { ListItemDetailed };
