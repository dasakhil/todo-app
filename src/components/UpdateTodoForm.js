// UpdateTodoForm.js
import React, { useState } from 'react';

const UpdateTodoForm = ({ todo, onUpdate }) => {
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(todo.id, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTodoForm;
