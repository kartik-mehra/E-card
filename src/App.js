import React from 'react';
import logo from './logo.svg';
import Card from './components/Card/card'
import './App.css';
import { Box } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Card/>
      {/* <p>adad</p> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
