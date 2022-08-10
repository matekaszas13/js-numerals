import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState<number>();

  return (
    <div >
      <input type="text" onChange={(event) => setInputValue(parseInt(event.target.value))}/>
      <button>convert</button>
    </div>
  );
}

export default App;
