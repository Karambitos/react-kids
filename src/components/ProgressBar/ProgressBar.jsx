import { useSelector } from 'react-redux';
import { getBalance, getRewards } from '../../redux/auth/selectors';
import styles from './ProgressBar.module.scss';
import { AnimatedLineProgressBar } from '@frogress/line';
import {
  getCurrentDate,
  getCurrentDayName,
  getWeekDates,
} from '../../redux/tasks/selectors';

export default function ProgressBar() {
  const { rewardsGained, rewardsPlanned } = useSelector(getRewards);
  const currentDate = useSelector(getCurrentDate);
  const currentDayName = useSelector(getCurrentDayName);
  const balance = useSelector(getBalance);
  const percent = (rewardsGained / rewardsPlanned) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentDayWrapper}>
        My tasks:
        <span className={styles.currentDay}>
          {currentDayName && <span>{currentDayName}, </span>}
          {currentDate.split('-').reverse().join('-')}
        </span>
      </div>
      <div className={styles.infoWrapper}>
        <p>
          Total balance: <span>{balance}</span>
        </p>
        <p>
          Points earned this week: <span>{rewardsGained}</span>
        </p>
        <p>
          Points planned for this week: <span>{rewardsPlanned}</span>
        </p>
        {percent != NaN && (
          <div className={styles.progressBar}>
            <span className={styles.progressBarData}>
              <span>{rewardsGained}</span>/<span>{rewardsPlanned}</span>
            </span>
            <AnimatedLineProgressBar
              percent={(rewardsGained / rewardsPlanned) * 100}
              rounded={6}
              height={6}
              progressColor="#9ECB44"
              containerColor="#E0E0E0"
            />
          </div>
        )}
      </div>
    </div>
  );
}
