// TodoForm.js

import React, { useState } from 'react';

const TodoForm = ({ onSubmit, initialValue = '', onUpdate }) => {
  const [description, setDescription] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) {
      onUpdate(description);
    } else {
      onSubmit(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter todo description"
      />
      <button type="submit">{onUpdate ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
