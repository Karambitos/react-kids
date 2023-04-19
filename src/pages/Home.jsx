import { useState } from 'react';
import CardList from '../components/CardList/CardList';
import WeekTabContent from '../components/WeekTabContent/WeekTabContent';
import WeekTabs from '../components/WeekTabs/WeekTabs';

import { getCurrentDate, getFilterTasks } from '../redux/tasks/selectors';
import { useSelector } from 'react-redux';
import CardListPlaceholder from '../components/CardListPlaceholder/CardListPlaceholder';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const Home = () => {
  const currentDate = useSelector(getCurrentDate);
  const filteredTasks = useSelector(getFilterTasks);
  return (
    <div className="asideWrapper contentMaxWidth">
      <WeekTabs currentDate={currentDate} />
      <WeekTabContent>
        <ProgressBar />
        {filteredTasks.length > 0 ? (
          <CardList tasks={filteredTasks} />
        ) : (
          <CardListPlaceholder />
        )}
      </WeekTabContent>
    </div>
  );
};

export default Home;
