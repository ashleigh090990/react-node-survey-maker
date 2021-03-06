import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi there</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="/auth/google"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Google Auth
          </a>
        </header>
      </div>
    );
  }
}

export default App;
