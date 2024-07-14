import { FC, useEffect } from 'react';
import { useLocalStorage } from '../hooks';

interface ISearchProps {
  startSearch: (query: string, page: string) => void;
  page: string;
}

const SearchBar: FC<ISearchProps> = ({ startSearch, page }) => {
  const {
    value: searchQuery,
    setValue: setSearchQuery,
    restored,
  } = useLocalStorage('searchQuery');

  useEffect(() => {
    if (restored || !searchQuery) handleSearch();
  }, [restored]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

  const handleSearch = () => {
    startSearch(searchQuery, page);
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
