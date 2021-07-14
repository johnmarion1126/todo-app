import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const App = () => {
  const [todo, setTodo] = useState([]);
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  useEffect(() => {
    currentDate = new Date();
    date = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    year = currentDate.getFullYear();
  }, [date]);

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
      const updatedTodo = prevTodo.filter((item) => item.id !== id);
      return updatedTodo;
    });
  };

  const handleAddTask = (description) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.concat({
        id: uniqid(),
        description,
        completed: false,
      });
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
      <h1>
        Todo App
        <div className="date">
          {month}
          /
          {date}
          /
          {year}
        </div>
      </h1>
      {todos}
      <InputForm handleAddTask={handleAddTask} />
    </div>
  );
};

export default App;
