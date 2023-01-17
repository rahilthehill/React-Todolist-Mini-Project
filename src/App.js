import React, { useState } from 'react';
import TodoList from './TodoList';
import './style.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
