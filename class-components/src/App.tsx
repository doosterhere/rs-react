import { Component } from 'react';
import './App.css';

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

  render() {
    return <div>App</div>;
  }
}

export default App;
