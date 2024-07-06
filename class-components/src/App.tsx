import { Component } from 'react';
import './App.css';
import {
  SearchBar,
  List,
  Loader,
  ErrorBoundary,
  ButtonErrorTest,
  Fallback,
} from './components';
import { PlanetType } from './types';

interface IAppState {
  searchTerm: string;
  searchResults: PlanetType[];
  isLoading: boolean;
}

class App extends Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      isLoading: false,
    };
  }

  setSearchTerm = (value: string) => {
    this.setState({
      searchTerm: value,
    });
  };

  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        `https://swapi.dev/api/planets/?search=${this.state.searchTerm}&page=1`,
      );
      const data = await response.json();
      this.setState({ searchResults: data.results });
    } catch (error) {
      this.setState({
        searchResults: [],
      });
      console.error('Error while fetching data', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <ErrorBoundary fallbackComponent={<Fallback />}>
        <div>
          <SearchBar
            setSearchTerm={this.setSearchTerm}
            handleSearch={this.handleSearch}
          />
          {this.state.isLoading && <Loader />}
          {!this.state.isLoading && (
            <List
              itemsList={this.state.searchResults}
              isLoading={this.state.isLoading}
            />
          )}
          <ButtonErrorTest />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
