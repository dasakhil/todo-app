import React from 'react';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo.id, !todo.completed)}
          />
          <span>{todo.description}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
