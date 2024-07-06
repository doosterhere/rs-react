import { Component } from 'react';

class Fallback extends Component {
  reloadPage() {
    history.go(0);
  }

  render() {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <button onClick={this.reloadPage}>Return to main page</button>
      </div>
    );
  }
}

export default Fallback;
