import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

export default function CardList({ items, page = 'home' }) {
  return (
    <>
      <ul className={styles.cardList}>
        {items &&
          items.map(item => {
            return (
              <CardListItem key={item._id ?? item.id} item={item} page={page} />
            );
          })}
      </ul>
    </>
  );
}

// const array = [
//   {
//     days: [
//       { id: 1, date: '2023-04-10', isActive: false, isCompleted: false },
//       { id: 2, date: '2023-04-11', isActive: false, isCompleted: false },
//       { id: 3, date: '2023-04-12', isActive: false, isCompleted: false },
//       { id: 4, date: '2023-04-13', isActive: false, isCompleted: false },
//       { id: 5, date: '2023-04-14', isActive: true, isCompleted: false },
//     ],
//     imageUrl:
//       'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
//     reward: 2,
//     title: '1',
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
//     imageUrl:
//       'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
//     reward: 2,
//     title: '2',
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
//     imageUrl:
//       'https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png',
//     reward: 2,
//     title: '3',
//     _id: '3',
//   },
// ];
