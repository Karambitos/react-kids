import styles from './PlanningHeader.module.scss';
import AddCustomTask from '../AddCustomTask/AddCustomTask';
import { useSelector } from 'react-redux';
import { getRewards } from '../../redux/auth/selectors';
import { getWeekDates } from '../../redux/tasks/selectors';

export default function PlanningHeader() {
  const { rewardsPlanned } = useSelector(getRewards);
  const weekDates = useSelector(getWeekDates);
  const startWeek =
    weekDates.length > 0 && weekDates[0].date.split('-').reverse()[0];
  const endWeek =
    weekDates.length > 0 && weekDates[6].date.split('-').reverse().join('.');

  return (
    <div className={styles.wrapper}>
      <div className={styles.col}>
        {endWeek && (
          <p>
            Plan for the week
            <span className={styles.dates}>
              {startWeek && startWeek} - {endWeek}
            </span>
          </p>
        )}
      </div>
      <div className={styles.col}>
        {rewardsPlanned > 0 && (
          <p className={styles.rewards}>
            Defined tasks for{' '}
            <span className={styles.rewardsPlanned}>{rewardsPlanned}</span>{' '}
            points
          </p>
        )}
      </div>
      <div className={styles.col}>
        <AddCustomTask />
      </div>
    </div>
  );
}
