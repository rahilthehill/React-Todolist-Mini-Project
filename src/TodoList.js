import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDelete = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
