// App.js

import React, { useState } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // State to manage projects and todos
  const [projects, setProjects] = useState([]);
  const [todos, setTodos] = useState([]);

  // Function to add a new project
  const handleAddProject = (title) => {
    const newProject = { id: projects.length + 1, title };
    setProjects([...projects, newProject]);
  };

  // Function to add a new todo within a project
  const handleAddTodo = (projectId, description) => {
    const newTodo = { id: todos.length + 1, projectId, description, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Function to update todo completion status
  const handleUpdateTodoCompletion = (id, completed) => {
    const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, completed } : todo));
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to generate markdown content for the gist
  const generateMarkdownContent = () => {
    let markdownContent = '';

    projects.forEach(project => {
      const projectTitle = project.title;
      let completedTodos = 0;
      let totalTodos = 0;
      let pendingTodos = '';

      const projectTodos = todos.filter(todo => todo.projectId === project.id);

      projectTodos.forEach(todo => {
        totalTodos++;
        if (todo.completed) {
          completedTodos++;
        } else {
          pendingTodos += `- [ ] ${todo.description}\n`;
        }
      });

      markdownContent += `
        ${projectTitle}
        Summary: ${completedTodos} / ${totalTodos} completed.
        
        Pending:
        ${pendingTodos}
        
        Completed:
      `;

      projectTodos.forEach(todo => {
        if (todo.completed) {
          markdownContent += `- [x] ${todo.description}\n`;
        }
      });

      markdownContent += '\n';
    });

    return markdownContent;
  };

  // Function to export the project summary as a gist
  const exportGist = () => {
    const markdownContent = generateMarkdownContent();
    const fileName = 'ProjectSummary.md';

    // Create a Blob containing the markdown content
    const blob = new Blob([markdownContent], { type: 'text/markdown' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    // Append the link to the document body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
        {/* Project Form Component for creating a new project */}
        <ProjectForm onSubmit={handleAddProject} />
        {/* Project List Component for displaying existing projects */}
        <ProjectList projects={projects} />
        {/* Todo Form Component for adding todos */}
        {projects.map(project => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <TodoForm onSubmit={(description) => handleAddTodo(project.id, description)} />
            {/* Todo List Component for displaying todos */}
            <TodoList
              todos={todos.filter(todo => todo.projectId === project.id)}
              onUpdateTodo={handleUpdateTodoCompletion}
              onDeleteTodo={handleDeleteTodo}
            />
          </div>
        ))}
        {/* Export Gist Button Component for exporting the project summary as a gist */}
        <button onClick={exportGist}>Export as Gist</button>
      </header>
    </div>
  );
}

export default App;
