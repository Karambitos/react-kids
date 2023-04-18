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
  const currentDate = useSelector(getCurrentDate);
  const img = task.imageUrl ? task.imageUrl : Image;
  const disabled = currentDate < new Date().toJSON().slice(0, 10) && !planning;

  const checked = !!task.days.find(
    day => day.date === currentDate && day.isCompleted
  );

  return (
    <>
      <li className={`${styles.cardItem} ${disabled ? styles.disabled : ''}`}>
        <img className={styles.cardItemImage} src={img} alt={task.title} />
        <div className={styles.cardItemContent}>
          <div className={styles.cardItemTitle}>
            <p>{task.title}</p>
            <span>{task.reward}</span>
          </div>
          {/* // TODO: */}
          {disabled ? (
            <span
              className={`${styles.cardStatus} ${
                checked ? styles.isCompleted : ''
              }`}
            >
              {checked ? <SVGCheck /> : <SVGExclamation />}
            </span>
          ) : planning ? (
            <DaysList task={task.days} taskId={task._id} />
          ) : (
            <Checkbox checked={checked} id={task._id} />
          )}
        </div>
      </li>
    </>
  );
}
