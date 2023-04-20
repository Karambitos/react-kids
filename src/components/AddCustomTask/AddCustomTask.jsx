import styles from './AddCustomTask.module.scss';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

export default function AddCustomTask() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    handleModalToggle();
  };
  const handleModalToggle = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <p>If you want to get more prizes - add tasks :)</p>
        <button
          className={styles.button}
          onClick={handleClick}
          role=""
        ></button>
      </div>
      {showModal && (
        <Modal handleModalToggle={handleModalToggle}>
          <NewTaskModal handleModalToggle={handleModalToggle} />
        </Modal>
      )}
    </>
  );
}
