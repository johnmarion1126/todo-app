import React from 'react';

const TodoItem = () => (
  <div>
    <div>
      <input type="checkbox" />
      Run
      <span> - 1 mile around the park</span>
    </div>

    <div>
      <input type="checkbox" />
      Work
      <span> - Finish project by tonight</span>
    </div>

    <div>
      <input type="checkbox" />
      Sleep
      <span> - Go to bed at 8</span>
    </div>
  </div>
);

export default TodoItem;
