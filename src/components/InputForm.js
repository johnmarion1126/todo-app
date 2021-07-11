import React, { useState } from 'react';

const InputForm = (props) => {
  const { handleAddTask } = props;
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = () => {
    handleAddTask(data);
    setData('');
    document.getElementById('user-input').value = '';
  };

  return (
    <form>
      <input
        id="user-input"
        type="text"
        name="description"
        onChange={handleChange}
      />
      <button
        className="btn add-btn"
        type="button"
        onClick={handleSubmit}
      >
        +
      </button>
    </form>
  );
};

export default InputForm;
