import styles from './CongratsModal.module.scss';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterGiftsList } from '../../redux/gift/selectors';
import { updateModalShow } from '../../redux/gift/slice';

export default function CongratsModal() {
  const dispatch = useDispatch();
  const giftsFilter = useSelector(getFilterGiftsList);

  const handleModalToggle = () => {
    dispatch(updateModalShow());
  };

  return (
    <>
      <Modal handleModalToggle={handleModalToggle}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Congratulations! You get:</h2>
          <ul className={styles.list}>
            {giftsFilter?.map(item => {
              return (
                <li key={item.id} className={styles.item}>
                  <img
                    src={item.imageUrl}
                    alt="Gift image"
                    width="90"
                    height="90"
                  />
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </Modal>
    </>
  );
}
