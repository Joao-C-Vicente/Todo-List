// App.tsx
import React from 'react';
import TaskList from './Components/TaskList'; // Import TaskList component
import CreateTask from './Components/CreateTask'; // If you also want to create tasks

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Management App</h1>
      
      {/* Render the TaskList component */}
      <TaskList />

      {/* Optionally, render the CreateTask component */}
      <CreateTask />
    </div>
  );
};

export default App;
