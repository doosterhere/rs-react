import { useEffect } from 'react';
import { useLocalStorage } from '../hooks';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const {
    value: searchQuery,
    setValue: setSearchQuery,
    restored,
  } = useLocalStorage('searchQuery');
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (restored || !searchQuery) handleSearch();
  }, [restored]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

  const handleSearch = () => {
    setSearchParams({
      search: searchQuery,
      page: '1',
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Star Wars planet..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
