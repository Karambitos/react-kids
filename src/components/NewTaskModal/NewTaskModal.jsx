import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileUploader } from 'react-drag-drop-files';
import SVGUploadImg from '../../assets/uploadImg';
import Image from '../../assets/fileUploader.png';
import styles from './NewTaskModal.module.scss';
import { createTask } from '../../redux/tasks/operations';
import { getTasks } from '../../redux/tasks/selectors';

const fileTypes = ['JPG', 'PNG'];

export default function NewTaskModal({ handleModalToggle }) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [showUploader, setShowUploader] = useState(true);

  const handleChange = file => {
    setFile(file);
  };

  const handleShowFileUploader = () => {
    setShowUploader(showUploader => !showUploader);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const body = new FormData();
    body.append('title', form.elements.task.value);
    body.append('reward', +form.elements.point.value);
    !!file && body.append('file', file);

    dispatch(createTask(body)).unwrap();
    form.reset();
    handleModalToggle();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.taskForm}
      >
        <div className={styles.fileUploaderWrapper}>
          <img
            className={`${styles.image} ${showUploader && styles.imageShow}`}
            src={Image}
            alt="Add new task"
            width="300"
            height="150"
          />
          <FileUploader
            handleChange={handleChange}
            name="file"
            type="file"
            maxSize={1}
            classes="fileUploader"
            types={fileTypes}
          />
          <div
            role="button"
            title="You can upload an image"
            className={styles.imageShowBTN}
            onClick={handleShowFileUploader}
          >
            <SVGUploadImg />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.taskFormInput}
            type="text"
            name="task"
            placeholder="Add task..."
            required
          />
          <input
            className={styles.taskFormInput}
            type="number"
            name="point"
            placeholder="Add points..."
            min="1"
            max="30"
            required
          />
          <button type="submit">Ok</button>
        </div>
      </form>
    </>
  );
}
