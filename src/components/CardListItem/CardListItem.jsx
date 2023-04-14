import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DaysList from './DaysList/DaysList';
import styles from './CardListItem.module.scss';
import Image from '../../assets/placeholder.png';

export default function ImageGalleryItem({ task }) {
  // const isCompleted = days[currentDay].isCompleted;
  const img = task.imageUrl ? task.imageUrl : Image;

  return (
    <>
      <li className={styles.cardItem}>
        <img className={styles.cardItemImage} src={img} alt={task.title} />
        <div className={styles.cardItemContent}>
          <div className={styles.cardItemTitle}>
            <p>{task.title}</p>
            <span>{task.reward}</span>
          </div>
          <DaysList task={task.days} taskId={task._id} />
          {/* <Checkbox checked={isCompleted} id={id} /> */}
        </div>
      </li>
    </>
  );
}
