import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState<number>();

  return (
    <div >
      <input type="text" />
      <button>convert</button>
    </div>
  );
}

export default App;
