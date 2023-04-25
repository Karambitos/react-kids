import BG from '../../assets/bg.png';
import { Link } from 'react-router-dom';
import styles from './CardListPlaceholder.module.scss';
import { useSelector } from 'react-redux';
import { getCurrentDate } from '../../redux/tasks/selectors';

export default function CardListPlaceholder() {
  const currentDate = useSelector(getCurrentDate);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2>No tasks on this day</h2>
        {!(currentDate < new Date().toJSON().slice(0, 10)) && (
          <Link to="/planning" className={styles.button}>
            Schedule tasks
          </Link>
        )}
      </div>
      <div className={styles.image}>
        <img src={BG} alt="Alt text" />
      </div>
    </div>
  );
}
