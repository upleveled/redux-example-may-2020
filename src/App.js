import React from 'react';
import Counter from './Counter';
import User from './User';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <User />
      </header>
    </div>
  );
}

export default App;
