import React, { useState } from 'react';
import axios from 'axios';

interface NewTask {
  title: string;
  description: string;
}

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: NewTask = { title, description};

    axios.post('https://localhost:7056/api/Tasks', newTask)
      .then(response => {
        console.log('Task created successfully:', response.data);  // Log response data
        alert('Task created!');
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
