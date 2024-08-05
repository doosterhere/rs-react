import { FC, useEffect, useRef, FormEvent, useContext } from 'react';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import classes from './SearchBar.module.css';

import { useAppDispatch, useLocalStorage } from '../../hooks';
import { DefaultResponseType, PlanetType } from '../../types';
import { Loader } from '..';
import { useGetPlanetsQuery } from '../../api';
import { setCurrentPageItems } from '../../store';
import { ThemeContext } from '../ThemeContext';

const LS_KEY = 'searchQuery';

interface ISearchBarProps {
  setData: React.Dispatch<React.SetStateAction<DefaultResponseType<PlanetType>>>;
}

const SearchBar: FC<ISearchBarProps> = ({ setData }) => {
  const router = useRouter();
  const { query } = router;
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatcher = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const { value: searchQuery, setValue: setSearchQuery, restored } = useLocalStorage(LS_KEY);
  const { fulfilledTimeStamp: loaded, data } = useGetPlanetsQuery({
    search: searchQuery,
    page: query.page?.toString() || '1',
  });

  useEffect(() => {
    if (restored || !searchQuery) {
      if (inputRef.current) {
        inputRef.current.value = searchQuery || '';
      }

      const newQuery = { ...query };

      if (query.search?.toString() !== searchQuery) {
        newQuery.search = searchQuery;
      }

      if (!query.page) {
        newQuery.page = '1';
      }

      router.push({ pathname: router.pathname, query: newQuery });
    }
  }, [restored, searchQuery]);

  useEffect(() => {
    if (data) {
      setData(data);
      dispatcher(setCurrentPageItems(data.results));
    }
  }, [dispatcher, setData, data]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      setSearchQuery(inputRef.current.value);
      // setSearchParams({ search: inputRef.current.value, page: '1' });
      const newQuery = { ...query, search: inputRef.current.value, page: '1' };
      router.push({ pathname: router.pathname, query: newQuery });
    }
  };

  return (
    <div className={clsx(classes.search, classes[theme.value])}>
      <form onSubmit={handleSubmit} role="form">
        <input
          className={classes.searchInput}
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
