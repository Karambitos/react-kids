import React from 'react';
import styles from './AddCustomTask.module.scss';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

export default function AddCustomTask() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = ():void => {
    handleModalToggle();
  };
  
  const handleModalToggle = ():void => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <p>If you want to get more prizes - add tasks :)</p>
        <button className={styles.button} onClick={handleClick}></button>
      </div>
      {showModal && (
        <Modal handleModalToggle={handleModalToggle}>
          <NewTaskModal handleModalToggle={handleModalToggle} />
        </Modal>
      )}
    </>
  );
}
