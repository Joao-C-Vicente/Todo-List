import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios.get('https://localhost:7056/api/Tasks')  // Direct API call
    .then(response => {
      console.log('API response:', response.data);  // Log the response
      setTasks(response.data);
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
    });
  }, []);
  

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks available.</li>
        ) : (
          tasks.map(task => (
            <li key={task.id}>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;