import React from 'react';
import TodoItem from './TodoItem';
import todoData from './todosData';

const App = () => {
  const todos = todoData.map(
    (todo) => <TodoItem key={todo.id} title={todo.title} description={todo.description} />,
  );

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      {todos}
    </div>
  );
};

export default App;
