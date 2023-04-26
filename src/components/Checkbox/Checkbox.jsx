import styles from './Checkbox.module.scss';
import SVGCheck from '../../assets/check';
import SVGExclamation from '../../assets/exclamation';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentDate, getIsLoading } from '../../redux/tasks/selectors';
import { switchProgress } from '../../redux/tasks/operations';
import { getBalance } from '../../redux/auth/selectors';
import { updateGifts } from '../../redux/gift/slice';

export default function Checkbox({ checked, id = false, page, points }) {
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const balanse = useSelector(getBalance);
  const isLoading = useSelector(getIsLoading);

  const handleCheckboxChange = e => {
    const itemId = id;
    const credentials = {
      date: {
        date: currentDate,
      },
      id: itemId,
    };
    if (page === 'awards') {
      dispatch(updateGifts({ itemId, balanse }));
    } else {
      dispatch(switchProgress(credentials));
    }
  };

  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        disabled={isLoading}
        checked={checked}
        onClick={e => handleCheckboxChange(e)}
        className="visually-hidden"
        readOnly
      />
      <div
        className={`${styles.checkbox} ${checked && styles.active} ${
          isLoading && styles.disabled
        }`}
      >
        <span className={styles.iconCheck}>
          <SVGCheck />
        </span>
        <span className={styles.iconExclamation}>
          <SVGExclamation />
        </span>
        <div className={styles.checkboxCircle}></div>
      </div>
    </label>
  );
}
