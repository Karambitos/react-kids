// import { useSelector } from 'react-redux';
// import { selectContactsCheckbox } from 'redux/contactBook/selectors';
import styles from './Checkbox.module.scss';
import { useDispatch } from 'react-redux';
import { switchProgress } from '../../redux/tasks/operations';

export default function Checkbox(checked, id) {
  const dispatch = useDispatch();
  console.log(id);

  const handleCheckboxChange = () => {
    console.log(id);
    dispatch(switchProgress(id));
  };
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={checked}
        onClick={handleCheckboxChange}
        className="visually-hidden"
        readOnly
      />
      <div className={`${styles.checkbox} ${checked ? styles.active : ''}`}>
        <div className={styles.checkboxCircle}></div>
      </div>
    </label>
  );
}
