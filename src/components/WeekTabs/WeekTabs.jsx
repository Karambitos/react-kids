import {
  getCurrentDate,
  getStartWeekDate,
  getWeekDates,
} from '../../redux/tasks/selectors';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './WeekTabs.module.scss';
import { switchDate } from '../../redux/tasks/slice';

export default function WeekTabs() {
  const currentDate = useSelector(getCurrentDate);
  const weekDates = useSelector(getWeekDates);
  const startWeekDate = useSelector(getStartWeekDate);
  const dispatch = useDispatch();

  const handleClick = date => {
    dispatch(switchDate(date));
  };

  return (
    <div className="aside">
      <ul className={styles.dayList}>
        {weekDates.map(({ day, date }, index) => {
          return (
            <li
              className={
                currentDate === date
                  ? `${styles.active} ${styles.dayItem}`
                  : `${styles.dayItem}`
              }
              key={index}
            >
              <button
                className={styles.dayButton}
                onClick={() => handleClick(date)}
              >
                {day}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
