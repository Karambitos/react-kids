import { useSelector } from 'react-redux';
import CardList from '../components/CardList/CardList';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { getGiftsList, getModal } from '../redux/gift/selectors';
import { buyGifts } from '../redux/gift/operations';
import CongratsModal from '../components/CongratsModal/CongratsModal';
import { useDispatch } from 'react-redux';

const Awards = () => {
  const gifts = useSelector(getGiftsList);
  const buttonDisabled = gifts.some(item => item.isSelected === true);
  console.log(buttonDisabled);
  const modalIsOpen = useSelector(getModal);
  const dispatch = useDispatch();

  const handleBuyGifts = () => {
    const giftIds = [];
    gifts.forEach(element => {
      element.isSelected && giftIds.push(element.id);
    });
    dispatch(buyGifts(giftIds));
  };
  return (
    <>
      <div className="contentMaxWidth">
        <div className="pageWrapper">
          <ProgressBar />
          <CardList items={gifts} page={'awards'} />
          <button
            className="button"
            disabled={!buttonDisabled}
            onClick={handleBuyGifts}
          >
            confirm
          </button>
          {modalIsOpen && <CongratsModal />}
        </div>
      </div>
    </>
  );
};

export default Awards;
