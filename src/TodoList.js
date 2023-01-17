import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, {task: newTodo, priority: priority}]);
    setNewTodo('');
    setPriority('');
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
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          priority={todo.priority}
        />
      ))}
    </div>
  );
}

export default TodoList;
