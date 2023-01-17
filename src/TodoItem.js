import React, { useState } from 'react';

function TodoItem({ todo, index, handleDelete }) {
  return (
    <div>
      <span className="todo-text">{todo.task}</span>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
