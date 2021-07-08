import React from 'react';

const TodoItem = (props) => {
  const { title, description } = props;

  return (
    <div className="todo-container">
      <input type="checkbox" />
      {title}
      <span>
        {' '}
        -
        {' '}
        {description}
      </span>
    </div>
  );
};

export default TodoItem;
