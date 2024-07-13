import { FC } from 'react';

interface IModalProps {
  isVisible: boolean;
  hideModal: () => void;
  content: string;
}

const Modal: FC<IModalProps> = ({ isVisible, hideModal, content }) => (
  <div
    className="modal-overlay"
    style={{ display: isVisible ? 'block' : 'none' }}
  >
    <div className="modal">
      <p>{content}</p>
      <button onClick={hideModal}>Close</button>
    </div>
  </div>
);

export default Modal;
