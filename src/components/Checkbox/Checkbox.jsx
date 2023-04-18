// import { useSelector } from 'react-redux';
// import { selectContactsCheckbox } from 'redux/contactBook/selectors';
import styles from './Checkbox.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentDate } from '../../redux/tasks/selectors';
import { switchProgress } from '../../redux/tasks/operations';
// import { useState } from 'react';

export default function Checkbox({ checked, id = false }) {
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const handleCheckboxChange = e => {
    const credentials = {
      date: {
        date: currentDate,
      },
      id: id,
    };
    dispatch(switchProgress(credentials));
  };
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={checked}
        onClick={e => handleCheckboxChange(e)}
        className="visually-hidden"
        readOnly
      />
      <div className={`${styles.checkbox} ${checked ? styles.active : ''}`}>
        <div className={styles.checkboxCircle}></div>
      </div>
    </label>
  );
}
