import React from 'react';

const TodoItem = (props) => {
  const { item, handleChange, handleDelete } = props;

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
        onClick={() => handleChange(item.id)}
      />
      <span style={item.completed ? completedStyle : null}>
        {item.description}
      </span>
      { item.completed
        ? (
          <button
            className="delete-btn"
            type="button"
            onClick={() => handleDelete(item.id)}
          >
            {' '}
            x
            {' '}

          </button>
        ) : null }
    </div>
  );
};

export default TodoItem;
