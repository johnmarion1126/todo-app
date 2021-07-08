import React, { useState } from 'react';
import TodoItem from './TodoItem';
import todoData from './todosData';

const App = () => {
  const [todo, setTodo] = useState(todoData);

  const handleChange = (id) => {
    setTodo((prevTodos) => {
      prevTodos = prevTodos.map((item) => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      });
      return prevTodos;
    });
  };

  const todos = todoData.map(
    (item) => <TodoItem key={item.id} item={item} handleChange={handleChange} />,
  );

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      {todos}
    </div>
  );
};

export default App;
