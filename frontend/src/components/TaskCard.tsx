
import React from 'react';

interface TaskCardProps {
  title: string;
  time: string;
  completed: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, time, completed }) => (
  <div>
    <h3>{time} - {title}</h3>
    <p>{completed ? 'Feito' : 'Pendente'}</p>
  </div>
);

export default TaskCard;
    