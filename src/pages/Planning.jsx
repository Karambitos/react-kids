import { useSelector } from 'react-redux';
import PlanningHeader from '../components/PlanningHeader/PlanningHeader';
import CardList from '../components/CardList/CardList';
import { getTasks } from '../redux/tasks/selectors';

const Planning = () => {
  const tasks = useSelector(getTasks);

  return (
    <div className="contentMaxWidth">
      <div className="pageWrapper">
        <PlanningHeader />
        <CardList tasks={tasks} planning={true} />
      </div>
    </div>
  );
};

export default Planning;
