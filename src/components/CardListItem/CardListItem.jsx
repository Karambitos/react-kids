import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentDate } from '../../redux/tasks/selectors';
import DaysList from './DaysList/DaysList';
import styles from './CardListItem.module.scss';
import Image from '../../assets/placeholder.png';
import SVGCheck from '../../assets/check';
import SVGExclamation from '../../assets/exclamation';

export default function ImageGalleryItem({ task, planning }) {
  const [isShow, setIsShow] = useState(false);
  const currentDate = useSelector(getCurrentDate);
  const img = task.imageUrl ? task.imageUrl : Image;

  const currentDateGlobal = new Date().toJSON().slice(0, 10);
  const dayBefore = currentDate < currentDateGlobal;

  const checked = !!task.days.find(
    day => day.date === currentDate && day.isCompleted
  );

  const handleClick = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };

  return (
    <>
      <li className={`${styles.cardItem} ${dayBefore ? styles.disabled : ''}`}>
        <img className={styles.cardItemImage} src={img} alt={task.title} />
        <div className={styles.cardItemContent}>
          <div className={styles.cardItemTitle}>
            <p>{task.title}</p>
            <span className={styles.reward}>
              {task.reward} {task.reward > 1 ? 'points' : 'point'}
            </span>
          </div>
          {dayBefore && !planning && (
            <span
              className={`${styles.cardStatus} ${
                checked ? styles.isCompleted : ''
              }`}
            >
              {checked ? <SVGCheck /> : <SVGExclamation />}
            </span>
          )}
          {currentDateGlobal === currentDate && !planning && (
            <Checkbox checked={checked} id={task._id} />
          )}
          {planning && (
            <>
              <button
                className={`${styles.daysListBTN} ${
                  isShow ? styles.isShow : ''
                }`}
                onClick={handleClick}
              ></button>
              <DaysList isShow={isShow} task={task.days} taskId={task._id} />
            </>
          )}
        </div>
      </li>
    </>
  );
}
