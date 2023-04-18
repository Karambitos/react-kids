import { useSelector } from 'react-redux';
import CardList from '../components/CardList/CardList';
import { getTasks } from '../redux/tasks/selectors';

const Planning = () => {
  const tasks = useSelector(getTasks);

  // const [currentDay, setCurrentDay] = useState(new Date().getDay());

  return (
    <div className="contentMaxWidth">
      <CardList tasks={tasks} planning={true} />
    </div>
  );
};

export default Planning;
