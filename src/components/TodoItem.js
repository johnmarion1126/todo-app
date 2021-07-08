import React from 'react';

const TodoItem = (props) => {
  const { item, handleChange } = props;

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      {item.title}
      <span>
        {' '}
        -
        {' '}
        {item.description}
      </span>
    </div>
  );
};

export default TodoItem;
