
import React from 'react';
import TaskCard from '../components/TaskCard';
import ProgressChart from '../components/ProgressChart';
import IdeaBoard from '../components/IdeaBoard';
import CanvasBoard from '../components/CanvasBoard';
import StickyNotesBoard from '../components/StickyNotesBoard';

const Home: React.FC = () => (
  <div className="p-4 space-y-4">
    <h1 className="text-3xl font-bold">Monk Mode Hub</h1>
    <TaskCard title="Treino" time="06h" completed={false} />
    <ProgressChart />
    <IdeaBoard />
    <StickyNotesBoard />
    <CanvasBoard />
  </div>
);

export default Home;
    