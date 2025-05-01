import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubtract() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract} style={{ marginLeft: '10px' }}>Subtract</button>
    </div>
  );
}

export default Counter;
