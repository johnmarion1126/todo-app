import React, { useState } from 'react';
import TodoItem from './TodoItem';
import todoData from './todosData';

const App = () => {
  const [todo, setTodo] = useState(todoData);

  const handleChange = (id) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return updatedTodo;
    });
  };

  const handleDelete = (id) => {
    setTodo((prevTodo) => {
      console.log(prevTodo);
      const updatedTodo = prevTodo.filter((item) => item.id !== id);
      return updatedTodo;
    });
  };

  const todos = todo.map(
    (item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    ),
  );

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      {todos}
    </div>
  );
};

export default App;
