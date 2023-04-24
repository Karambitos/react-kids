import { useSelector } from 'react-redux';
import CardList from '../components/CardList/CardList';
import { getTasks } from '../redux/tasks/selectors';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { getGifts } from '../redux/gift/selectors';

const Awards = () => {
  const tasks = useSelector(getTasks);
  const gifts = useSelector(getGifts);

  console.log(gifts);
  // const dispatch = useDispatch();

  return (
    <div className="contentMaxWidth">
      <div className="pageWrapper">
        <ProgressBar />
        <CardList tasks={gifts} />
      </div>
    </div>
  );
};

export default Awards;
