import React, { Component } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';

export class App extends Component {
  render() {
    return (
      <div>
        <div id="main-title">"25 + 5 Clock"</div>
        <Break />
        <Session />
        <Timer />
      </div>
    );
  }
}

export default App;
