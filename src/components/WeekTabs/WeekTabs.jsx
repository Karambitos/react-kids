import { useState } from 'react';
import styles from './WeekTabs.module.scss';

export default function WeekTabs({ currentDay }) {
  const [currentIndex, setCurrentIndex] = useState(currentDay);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const handleClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="aside">
      <ul className={styles.dayList}>
        {daysOfWeek.map((day, index) => {
          return (
            <li
              className={
                currentIndex === index
                  ? `${styles.active} ${styles.dayItem}`
                  : `${styles.dayItem}`
              }
              key={index}
            >
              <button
                className={styles.dayButton}
                onClick={() => handleClick(index)}
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
