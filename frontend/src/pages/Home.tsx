
import React from 'react';
import TaskCard from '../components/TaskCard';
import ProgressChart from '../components/ProgressChart';
import IdeaBoard from '../components/IdeaBoard';

const Home: React.FC = () => (
  <div>
    <h1>Monk Mode Hub</h1>
    <TaskCard title="Treino" time="06h" completed={false} />
    <ProgressChart />
    <IdeaBoard />
  </div>
);

export default Home;
    