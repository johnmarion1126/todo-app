import React, { useState } from 'react';

const InputForm = () => {
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your username is: ${data}`);
  };

  return (
    <form>
      <input
        type="text"
        name="description"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleSubmit}
      >
        x

      </button>
      <div>
        {data}
      </div>
    </form>
  );
};

export default InputForm;
