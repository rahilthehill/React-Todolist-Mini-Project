import React, { useState } from 'react';

function TodoItem({ todo, index, handleDelete }) {
  const [priority, setPriority] = useState("");

  return (
    <div>
      <span>{todo.task}</span>
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
