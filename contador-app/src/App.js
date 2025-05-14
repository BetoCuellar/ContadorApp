import React, { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const initialCount = 0;

  const handleIncrement = () => {
    setCount(count + inputValue);
  };

  const handleDecrement = () => {
    setCount(count - inputValue);
  };

  const handleReset = () => {
    setCount(initialCount);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value === '' ? 1 : parseInt(value));
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1>Contador React</h1>
        <div style={{ marginBottom: '10px', fontSize: '24px' }}>Contador: {count}</div>
        <input
          type="number"
          style={{ padding: '5px', marginBottom: '10px', width: '80px', textAlign: 'center' }}
          placeholder="Ingrese un valor"
          onChange={handleInputChange}
        />
        <div>
          <button onClick={handleIncrement} style={{ margin: '5px' }}>Incrementar</button>
          <button onClick={handleDecrement} style={{ margin: '5px' }}>Decrementar</button>
          <button onClick={handleReset} style={{ margin: '5px' }}>Resetear</button>
        </div>
      </div>
    </div>
  );
}


// npm test -- --clearCache //