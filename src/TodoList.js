import React, { useState } from 'react';
import TodoItem from './TodoItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TodoList({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, {task: newTodo, priority: priority, date: selectedDate}]);
    setNewTodo('');
    setPriority('');
    setSelectedDate(null);
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
          className="todo-input"
        />
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          placeholderText="Select a due date"
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
    <div key={index} className="todo-task">
      <span className="todo-text">{todo.task}</span>
      <DatePicker
        selected={todo.date}
        onChange={date => setSelectedDate(date)}
        placeholderText="Select a due date"
      />
      <select value={todo.priority} onChange={e => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  ))}

    </div>
  );
}

export default TodoList;
