import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeTask } from '../../../redux/tasks/operations';
import { getWeekDates } from '../../../redux/tasks/selectors';
import styles from './DaysList.module.scss';

export default function DaysList({ task, taskId }) {
  const weekDates = useSelector(getWeekDates);

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
    <form className={styles.daysList}>
      <ul>
        {weekDates.map(({ day, date }, index) => {
          return (
            <li key={index} id={date}>
              <input
                type="checkbox"
                disabled={date < new Date().toJSON().slice(0, 10)}
                checked={task[index].isActive}
                onChange={() => handleChange(task, index)}
              />
              <label>{day.slice(0, 2)}</label>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

// [
//   {
//     _id: '6437ca7bfe07cd0cd25498c8',
//     date: '2023-04-10',
//     isActive: false,
//     isCompleted: false,
//   },
//   {
//     _id: '6437ca7bfe07cd0cd25498c9',
//     date: '2023-04-11',
//     isActive: false,
//     isCompleted: false,
//   },

//   {
//     _id: '6437ca7bfe07cd0cd25498ca',
//     date: '2023-04-12',
//     isActive: false,
//     isCompleted: false,
//   },

//   {
//     _id: '6437ca7bfe07cd0cd25498cb',
//     date: '2023-04-13',
//     isActive: false,
//     isCompleted: false,
//   },

//   {
//     _id: '6437ca7bfe07cd0cd25498cc',
//     date: '2023-04-14',
//     isActive: false,
//     isCompleted: false,
//   },

//   {
//     _id: '6437ca7bfe07cd0cd25498cd',
//     date: '2023-04-15',
//     isActive: false,
//     isCompleted: false,
//   },

//   {
//     _id: '6437ca7bfe07cd0cd25498ce',
//     date: '2023-04-16',
//     isActive: false,
//     isCompleted: false,
//   },
// ];
