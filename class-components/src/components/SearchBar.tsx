import { FC, useEffect, useState } from 'react';

interface ISearchProps {
  startSearch: (query: string) => void;
}

const getSearchTerm = () => localStorage.getItem('searchQuery') || '';

const SearchBar: FC<ISearchProps> = ({ startSearch }) => {
  const [searchQuery, setSearchQuery] = useState(() => getSearchTerm());

  useEffect(() => {
    handleSearch();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim());
  };

  const handleSearch = async () => {
    localStorage.setItem('searchQuery', searchQuery);
    startSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a StarWars planet..."
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
