import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loader from './Loader';
import { PlanetType } from '../types';
import { getDetailedData } from '../api';

const ListItemDetailed = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [detailedData, setDetailedData] = useState<PlanetType>({} as PlanetType);

  useEffect(() => {
    if (id) {
      setIsLoaded(true);
      getDetailedData(id).then(response => {
        setDetailedData(response ?? ({} as PlanetType));
        setIsLoaded(false);
      });
    }
  }, [id]);

  return (
    <div className="list-item-detailed">
      {isLoaded ? (
        <Loader />
      ) : (
        <div className="list-item-detailed-content">
          <div>Name: {detailedData?.name}</div>
          <div>Diameter: {detailedData?.diameter}</div>
          <div>Gravity: {detailedData?.gravity}</div>
          <div>Population: {detailedData?.population}</div>
          <div>Climate: {detailedData?.climate}</div>
          <div>Terrain: {detailedData?.terrain}</div>
          <div>Surfase water: {detailedData?.surface_water}</div>
          <Link to={'/'}>Close</Link>
        </div>
      )}
    </div>
  );
};

export default ListItemDetailed;
