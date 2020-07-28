import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello,snowpack</p>
      </header>
    </div>
  );
}

export default App;
