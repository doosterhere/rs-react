import { Component } from 'react';

interface IModalProps {
  isVisible: boolean;
  hideModal: () => void;
  content: string;
}

class Modal extends Component<IModalProps> {
  render() {
    return (
      <div
        className="modal-overlay"
        style={{ display: this.props.isVisible ? 'block' : 'none' }}
      >
        <div className="modal">
          <p>{this.props.content}</p>
          <button onClick={this.props.hideModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
