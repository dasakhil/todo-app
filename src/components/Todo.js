// Todo.js
import React from 'react';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const handleUpdate = () => {
    // Implement update functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleUpdate}
      />
      <input
        type="text"
        value={todo.description}
        onChange={handleUpdate}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
