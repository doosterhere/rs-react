import { Component } from 'react';
import './App.css';
import { SearchBar } from './components';

interface IAppState {
  searchTerm: string;
  searchResults: [];
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

  render() {
    return (
      <div>
        <SearchBar setSearchTerm={this.setSearchTerm} />
      </div>
    );
  }
}

export default App;
