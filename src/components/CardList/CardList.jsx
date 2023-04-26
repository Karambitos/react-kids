import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';
import Loader from '../Loader/Loader';

export default function CardList({ items, page = 'home' }) {
  return (
    <>
      {!items ? (
        <Loader />
      ) : (
        <ul className={styles.cardList}>
          {items &&
            items.map(item => {
              return (
                <CardListItem
                  key={item._id ?? item.id}
                  item={item}
                  page={page}
                />
              );
            })}
        </ul>
      )}
    </>
  );
}
