import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';
import { PlanetType } from '../types';

const ListItemDetailed = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [detailedData, setDetailedData] = useState<PlanetType>({} as PlanetType);

  const getData = async () => {
    setIsLoaded(true);
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await response.json();
    setDetailedData(data);
    setIsLoaded(false);
  };

  useEffect(() => {
    getData();
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
