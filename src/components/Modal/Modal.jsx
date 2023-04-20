import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ handleModalToggle, children }) {
  useEffect(() => {
    window.addEventListener('keydown', closeOnEscHandler);

    return () => {
      window.removeEventListener('keydown', closeOnEscHandler);
    };
    // eslint-disable-next-line
  }, []);

  function closeOnEscHandler(e) {
    if (e.code === 'Escape') {
      handleModalToggle();
    }
  }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleModalToggle();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button
          onClick={handleBackdropClick}
          className={styles.button}
        ></button>
        <div className={styles.modalInner}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
}
