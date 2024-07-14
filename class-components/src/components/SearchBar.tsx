import { FC, useState, useEffect, useRef, FormEvent } from 'react';
import { useLocalStorage } from '../hooks';
import { useSearchParams } from 'react-router-dom';
import { DefaultResponseType, PlanetType } from '../types';
import Loader from './Loader';

const LS_KEY = 'searchQuery';

interface ISearchBarProps {
  setData: React.Dispatch<React.SetStateAction<DefaultResponseType<PlanetType>>>;
}

const SearchBar: FC<ISearchBarProps> = ({ setData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const { value: searchQuery, setValue: setSearchQuery, restored } = useLocalStorage(LS_KEY);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (restored || !searchQuery) {
      if (inputRef.current) inputRef.current.value = searchQuery || '';
      if (searchQuery) searchParams.set('search', searchQuery);
      fetchData(searchQuery, searchParams.get('page') || '1');
    }
  }, [restored]);

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams(prev => `${prev}&page=1`);
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (searchQuery !== null) {
      fetchData(searchQuery, searchParams.get('page') || '1');
    }
  }, [searchQuery, searchParams]);

  const fetchData = async (query: string, page: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://swapi.dev/api/planets/?search=${query}&page=${page}`);
      const results = await response.json();
      setData(results);
    } catch (error) {
      setData({ count: 0, results: [] });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      setSearchQuery(inputRef.current.value);
      setSearchParams({ search: inputRef.current.value, page: '1' });
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoComplete="off"
          placeholder="Search for a Star Wars planet..."
          ref={inputRef}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default SearchBar;
