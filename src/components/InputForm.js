import React, { useState } from 'react';

const InputForm = (props) => {
  const { handleAddTask } = props;
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = () => {
    if (data === '') {
      alert('Input is empty');
      return;
    }
    handleAddTask(data);
    setData('');
  };

  return (
    <form>
      <input
        className="user-input"
        type="text"
        name="description"
        value={data}
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
