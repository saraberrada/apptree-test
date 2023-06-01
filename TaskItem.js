import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleStatusChange = (event) => {
    const status = event.target.value;
    updateTask(task.id, { status });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{task.title}</h3>
        <p className="card-text">{task.description}</p>
        <p className="card-text">Due Date: {task.dueDate}</p>
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="form-select"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
