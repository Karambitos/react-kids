import styles from './ModalLogout.module.scss';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';

export default function ModalLogout({ handleModalToggle }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    handleModalToggle();
    dispatch(logoutUser());
  };

  return (
    <div className={styles.modal}>
      <h3 className={styles.title}>Are you sure?</h3>
      <p className={styles.text}>Confirm you want to sign out!</p>
      <div className={styles.buttonsWrap}>
        <button type="button" className="button" onClick={handleLogout}>
          Yes
        </button>
        <button
          type="button"
          className="button"
          onClick={() => handleModalToggle()}
        >
          No
        </button>
      </div>
    </div>
  );
}
