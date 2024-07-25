import { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';

import classes from './ListItemDetailed.module.css';

import { Loader } from '..';
import { PlanetType } from '../../types';
import { getDetailedData } from '../../api';

const ListItemDetailed = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [isLoaded, setIsLoaded] = useState(true);
  const [detailedData, setDetailedData] = useState<PlanetType>({} as PlanetType);

  useEffect(() => {
    setIsLoaded(true);
    getDetailedData(id!).then(response => {
      setDetailedData(response ?? ({} as PlanetType));
      setIsLoaded(false);
    });
  }, [id]);

  return (
    <div className={classes.item}>
      {isLoaded ? (
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