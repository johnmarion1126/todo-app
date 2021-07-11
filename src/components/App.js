import React, { useState } from 'react';
import uniqid from 'uniqid';
import InputForm from './InputForm';
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
    console.log(todo);
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
      <InputForm handleAddTask={handleAddTask} />
    </div>
  );
};

export default App;
