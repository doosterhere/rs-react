import { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader-overlay">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
