import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentDate } from '../../redux/tasks/selectors';
import DaysList from './DaysList/DaysList';
import styles from './CardListItem.module.scss';
import Image from '../../assets/placeholder.png';
import SVGCheck from '../../assets/check';
import SVGExclamation from '../../assets/exclamation';
import { getLastGiftBuy } from '../../redux/gift/selectors';

export default function CardListItem({ item, page }) {
  const [isShow, setIsShow] = useState(false);
  const img = item.imageUrl ? item.imageUrl : Image;
  const currentDate = useSelector(getCurrentDate);
  const lastGiftBuy = useSelector(getLastGiftBuy);
  const currentDateGlobal = new Date().toJSON().slice(0, 10);
  const dayBefore = currentDate < currentDateGlobal;

  const checked =
    page === 'home'
      ? !!item.days?.find(day => day.date === currentDate && day.isCompleted)
      : item.isSelected;

  const handleOpenCheckbox = () => {
    setIsShow(!isShow);
  };

  const points = item.reward ? item.reward : item.price;

  return (
    <>
      <li className={`${styles.cardItem} ${dayBefore ? styles.disabled : ''}`}>
        <img className={styles.cardItemImage} src={img} alt={item.title} />
        <div className={styles.cardItemContent}>
          <div className={styles.cardItemTitle}>
            <p>{item.title}</p>
            <span className={styles.points}>
              {points} {points > 1 ? ' points' : ' point'}
            </span>
          </div>
          {page === 'home' && dayBefore && (
            <span
              className={`${styles.cardStatus} ${
                checked ? styles.isCompleted : ''
              }`}
            >
              {checked ? <SVGCheck /> : <SVGExclamation />}
            </span>
          )}
          {page === 'home' &&
            currentDateGlobal === currentDate &&
            (currentDateGlobal === lastGiftBuy && checked ? (
              <span className={`${styles.cardStatus} ${styles.isCompleted}`}>
                <SVGCheck />
              </span>
            ) : (
              <Checkbox checked={checked} id={item._id} />
            ))}
          {page === 'planning' && (
            <>
              <button
                className={`${styles.daysListBTN} ${
                  isShow ? styles.isShow : ''
                }`}
                onClick={handleOpenCheckbox}
              ></button>
              <DaysList isShow={isShow} task={item.days} taskId={item._id} />
            </>
          )}
          {page === 'awards' && (
            <>
              <Checkbox
                checked={checked}
                id={item._id ?? item.id}
                page={page}
              />
            </>
          )}
        </div>
      </li>
    </>
  );
}
