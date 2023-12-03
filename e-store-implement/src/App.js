import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  cosnt [results, setResults ] = useState([]);
  useEffect(() => {
    fetch("http:/localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
