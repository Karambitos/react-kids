import { useState } from 'react';
import CardList from '../components/CardList/CardList';
import WeekTabContent from '../components/WeekTabContent/WeekTabContent';
import WeekTabs from '../components/WeekTabs/WeekTabs';

const Home = () => {
  const [currentDay, setCurrentDay] = useState(
    new Date().toJSON().slice(0, 10)
  );

  return (
    <div className="asideWrapper contentMaxWidth">
      <WeekTabs currentDay={currentDay} />
      <WeekTabContent>
        <CardList currentDay={currentDay} />
      </WeekTabContent>
    </div>
  );
};

export default Home;
