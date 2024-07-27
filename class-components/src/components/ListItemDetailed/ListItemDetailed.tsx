import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import clsx from 'clsx';

import classes from './ListItemDetailed.module.css';

import { Loader } from '..';
import { PlanetType } from '../../types';
import { planetApi } from '../../api';
import { ThemeContext } from '../ThemeContext';

const ListItemDetailed = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [detailedData, setDetailedData] = useState<PlanetType>({} as PlanetType);
  const { fulfilledTimeStamp: loaded, data } = planetApi.useGetPlanetQuery(id!);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (data) {
      setDetailedData(data);
    }
  }, [data]);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <div className={clsx(classes.content, classes[theme.value])}>
          <div>Name: {detailedData?.name}</div>
          <div>Diameter: {detailedData?.diameter}</div>
          <div>Gravity: {detailedData?.gravity}</div>
          <div>Population: {detailedData?.population}</div>
          <div>Climate: {detailedData?.climate}</div>
          <div>Terrain: {detailedData?.terrain}</div>
          <div>Surfase water: {detailedData?.surface_water}</div>
          <Link to={`/?${searchParams.toString()}`}>Close</Link>
        </div>
      )}
    </>
  );
};

export { ListItemDetailed };
