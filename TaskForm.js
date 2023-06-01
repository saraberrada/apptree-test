import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Date.now(),
      title,
      status: 'To Do',
    };
    addTask(task);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
