import React from 'react';

const TodoItem = (props) => {
  const { item, handleChange } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  };

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      <span style={item.completed ? completedStyle : null}>
        {item.title}
        {' '}
        -
        {' '}
        {item.description}
      </span>
    </div>
  );
};

export default TodoItem;
