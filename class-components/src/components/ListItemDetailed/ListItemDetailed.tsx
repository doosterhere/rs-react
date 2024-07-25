import { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import classes from './ListItemDetailed.module.css';

import { Loader } from '..';
import { PlanetType } from '../../types';
import { planetApi } from '../../api';

const ListItemDetailed = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [detailedData, setDetailedData] = useState<PlanetType>({} as PlanetType);
  const { fulfilledTimeStamp: loaded, data } = planetApi.useGetPlanetQuery(id!);

  useEffect(() => {
    if (data) {
      setDetailedData(data);
    }
  }, [data]);

  return (
    <div className={classes.item}>
      {!loaded ? (
        <Loader />
      ) : (
        <div className={classes.content}>
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
    </div>
  );
};

export { ListItemDetailed };
