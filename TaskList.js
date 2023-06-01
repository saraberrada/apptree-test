import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const handleUpdateTask = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={handleUpdateTask}
          deleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
