import { useSelector } from 'react-redux';
import PlanningHeader from '../components/PlanningHeader/PlanningHeader';
import CardList from '../components/CardList/CardList';
import { getTasks } from '../redux/tasks/selectors';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Awards = () => {
  const tasks = useSelector(getTasks);

  return (
    <div className="contentMaxWidth">
      <div className="pageWrapper">
        <ProgressBar />
      </div>
    </div>
  );
};

export default Awards;
