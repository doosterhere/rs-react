import { useState, FormEvent, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import classes from './SearchBar.module.css';

import { ThemeContext } from '../ThemeContext';
import { useLocalStorage } from '../../hooks';

const LS_KEY = 'searchQuery';

const SearchBar = () => {
  const router = useRouter();
  const { query } = router;
  const { theme } = useContext(ThemeContext);
  const { storedValue: searchQuery, setStoredValue: setSearchQuery } = useLocalStorage(LS_KEY, '');
  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSearchQuery(value);
    const newQuery = { ...query, search: value, page: '1' };
    router.push({ pathname: router.pathname, query: newQuery });
  };

  return (
    <div className={clsx(classes.search, classes[theme.value])}>
      <form onSubmit={handleSubmit} role="form">
        <input
          value={value || ''}
          onChange={e => setValue(e.target.value)}
          className={classes.searchInput}
          type="search"
          autoComplete="off"
          placeholder="Search for a Star Wars planet..."
          role="searchbox"
        />
        <button type="submit" role="button">
          Search
        </button>
      </form>
    </div>
  );
};

export { SearchBar };
