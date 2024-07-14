import { Component } from 'react';

interface ISearchProps {
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
}

interface ISearchState {
  searchTerm: string;
}

class SearchBar extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  componentDidMount(): void {
    this.handleSearch();
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value.trim() });
  };

  handleSearch = async () => {
    await this.props.setSearchTerm(this.state.searchTerm);
    localStorage.setItem('searchTerm', this.state.searchTerm);
    this.props.handleSearch();
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a StarWars planet..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
