// ProjectForm.js

import React, { useState } from 'react';

function ProjectForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter project title"
        value={title}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectForm;
