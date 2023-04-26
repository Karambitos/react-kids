import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeTask } from '../../../redux/tasks/operations';
import { getIsLoading, getWeekDates } from '../../../redux/tasks/selectors';
import styles from './DaysList.module.scss';

export default function DaysList({ task, taskId, isShow }) {
  const weekDates = useSelector(getWeekDates);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const handleChange = (task, index) => {
    const dayId = task[index]._id;
    const data = [];
    task.forEach(item => {
      item._id === dayId ? data.push(!item.isActive) : data.push(item.isActive);
    });
    const days = { days: data };
    dispatch(activeTask({ days, taskId }));
  };

  return (
    <form className={`${styles.daysList} ${isShow ? styles.isShow : ''}`}>
      <ul>
        {weekDates.map(({ day, date }, index) => {
          return (
            <li key={index} id={date}>
              <label>
                <input
                  type="checkbox"
                  disabled={
                    date < new Date().toJSON().slice(0, 10) || isLoading
                  }
                  checked={task[index].isActive}
                  onChange={() => handleChange(task, index)}
                />
                {day.slice(0, 2)}
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
}
