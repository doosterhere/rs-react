import { FC, useEffect } from 'react';
import { useLocalStorage } from '../hooks';

interface ISearchProps {
  startSearch: (query: string) => void;
}

const SearchBar: FC<ISearchProps> = ({ startSearch }) => {
  const { value: searchQuery, setValue: setSearchQuery } =
    useLocalStorage('searchQuery');

  useEffect(() => {
    handleSearch();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

  const handleSearch = () => {
    startSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Star Wars planet..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
