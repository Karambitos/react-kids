import { getCurrentDate, getWeekDates } from '../../redux/tasks/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styles from './WeekTabs.module.scss';
import { switchDate } from '../../redux/tasks/slice';

export default function WeekTabs() {
  const currentDate = useSelector(getCurrentDate);
  const weekDates = useSelector(getWeekDates);
  const dispatch = useDispatch();

  const handleClick = date => {
    dispatch(switchDate(date));
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

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
                {isMobile ? day.slice(0, 2) : day}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
