import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterTasks, getTasks } from '../../redux/tasks/selectors';

export default function CardList({ currentDay = null }) {
  const tasks = useSelector(getTasks);
  const filteredTasks = useSelector(getFilterTasks);

  // const filteredArray = tasks.filter(obj => {
  //   const matchingDay = obj.days.find(
  //     day => day.date === currentDay && day.isActive
  //   );
  //   return !!matchingDay;
  // });
  // console.log(filteredArray);

  return (
    <ul className={styles.cardList}>
      {tasks &&
        tasks.map(task => {
          return <CardListItem key={task._id} task={task} />;
        })}
    </ul>
  );
}
// const currentDay = '2023-04-14'
// const array = [
//   {
//     days: [
//       { id: 1, date: '2023-04-10', isActive: false, isCompleted: false },
//       { id: 2, date: '2023-04-11', isActive: false, isCompleted: false },
//       { id: 3, date: '2023-04-12', isActive: false, isCompleted: false },
//       { id: 4, date: '2023-04-13', isActive: false, isCompleted: false },
//       { id: 5, date: '2023-04-14', isActive: true, isCompleted: false },
//     ],
//     reward: 2,
//     _id: '1',
//   },
//   {
//     days: [
//       { id: 1, date: '2023-04-10', isActive: false, isCompleted: false },
//       { id: 2, date: '2023-04-11', isActive: false, isCompleted: false },
//       { id: 3, date: '2023-04-12', isActive: false, isCompleted: false },
//       { id: 4, date: '2023-04-13', isActive: false, isCompleted: false },
//       { id: 5, date: '2023-04-14', isActive: false, isCompleted: false },
//     ],
//     reward: 2,
//     _id: '2',
//   },
//   {
//     days: [
//       { id: 1, date: '2023-04-10', isActive: false, isCompleted: false },
//       { id: 2, date: '2023-04-11', isActive: false, isCompleted: false },
//       { id: 3, date: '2023-04-12', isActive: false, isCompleted: false },
//       { id: 4, date: '2023-04-13', isActive: false, isCompleted: false },
//       { id: 5, date: '2023-04-14', isActive: false, isCompleted: false },
//     ],
//     reward: 2,
//     _id: '3',
//   },
// ];
