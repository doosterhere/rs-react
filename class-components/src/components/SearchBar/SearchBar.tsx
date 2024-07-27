import { FC, useEffect, useRef, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import classes from './SearchBar.module.css';

import { useAppDispatch, useLocalStorage } from '../../hooks';
import { DefaultResponseType, PlanetType } from '../../types';
import { Loader } from '..';
import { planetApi } from '../../api';
import { setCurrentPageItems } from '../../store';

const LS_KEY = 'searchQuery';

interface ISearchBarProps {
  setData: React.Dispatch<React.SetStateAction<DefaultResponseType<PlanetType>>>;
}

const SearchBar: FC<ISearchBarProps> = ({ setData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { value: searchQuery, setValue: setSearchQuery, restored } = useLocalStorage(LS_KEY);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fulfilledTimeStamp: loaded, data } = planetApi.useGetPlanetsQuery({
    search: searchQuery,
    page: searchParams.get('page') || '1',
  });
  const dispatcher = useAppDispatch();

  useEffect(() => {
    if (restored || !searchQuery) {
      if (inputRef.current) {
        inputRef.current.value = searchQuery || '';
      }

      if (searchParams.get('search') !== searchQuery) {
        setSearchParams({ search: searchQuery });
      }

      if (!searchParams.get('page')) {
        setSearchParams(prev => `${prev}&page=1`);
      }
    }
  }, [restored, searchQuery, searchParams, setSearchParams]);

  useEffect(() => {
    if (data) {
      setData(data);
      dispatcher(setCurrentPageItems(data.results));
    }
  }, [data, setData, dispatcher]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      setSearchQuery(inputRef.current.value);
      setSearchParams({ search: inputRef.current.value, page: '1' });
    }
  };

  return (
    <div className={classes.search}>
      <form onSubmit={handleSubmit} role="form">
        <input
          type="search"
          autoComplete="off"
          placeholder="Search for a Star Wars planet..."
          ref={inputRef}
          disabled={!loaded}
        />
        <button type="submit" disabled={!loaded}>
          Search
        </button>
      </form>
      {!loaded && <Loader />}
    </div>
  );
};

export { SearchBar };
