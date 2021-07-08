import React from 'react';

const TodoItem = (props) => {
  const { item } = props;

  return (
    <div className="todo-container">
      <input type="checkbox" checked={item.completed} />
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
