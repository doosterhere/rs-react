import { Component } from 'react';

interface IButtonErrorTestState {
  hasError: boolean;
}

class ButtonErrorTest extends Component<unknown, IButtonErrorTestState> {
  state = {
    hasError: false,
  };

  handleThrowError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Throwing the error while rendering');
    }

    return (
      <button
        type="button"
        className="button-error"
        onClick={this.handleThrowError}
      >
        Throw an error
      </button>
    );
  }
}

export default ButtonErrorTest;
