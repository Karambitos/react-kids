import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PlanningHeader from '../components/PlanningHeader/PlanningHeader';
import CardList from '../components/CardList/CardList';
import { getTasks } from '../redux/tasks/selectors';
import { refreshDate } from '../redux/tasks/slice';

const Planning = () => {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshDate());
  }, [dispatch]);

  return (
    <div className="contentMaxWidth">
      <div className="pageWrapper">
        <PlanningHeader />
        <CardList items={tasks} page={'planning'} />
      </div>
    </div>
  );
};

export default Planning;
