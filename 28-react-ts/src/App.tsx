import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My React App</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
