import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Header, List, Pagination, SearchBar } from '../components';
import { DefaultResponseType, PlanetType } from '../types';

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
        <div className="container-left">
          <SearchBar setData={setData} />
          {data.results.length > 0 && <List itemsList={data.results} />}
          {data.results.length === 0 && <div>No results</div>}
          {data.count > 10 && <Pagination itemsCount={data.count} />}
        </div>
        <div className="container-right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomePage;
