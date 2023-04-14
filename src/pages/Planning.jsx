import { useState } from 'react';
import CardList from '../components/CardList/CardList';

const Planning = () => {
  // const [currentDay, setCurrentDay] = useState(new Date().getDay());

  return (
    <div className="contentMaxWidth">
      <CardList />
    </div>
  );
};

export default Planning;
