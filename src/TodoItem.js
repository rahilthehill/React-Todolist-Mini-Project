import React from 'react';

function TodoItem({ todo, index, handleDelete }) {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
