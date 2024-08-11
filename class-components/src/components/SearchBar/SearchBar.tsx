'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import classes from './SearchBar.module.css';

import { useLocalStorage } from '../../hooks';

const LS_KEY = 'searchQuery';

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { storedValue: searchQuery, setStoredValue: setSearchQuery } = useLocalStorage(LS_KEY, '');
  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSearchQuery(value);
    router.push(`${pathname}?search=${value}&page=1`);
  };

  return (
    <div className={classes.search}>
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
