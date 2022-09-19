import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markDown: '',
    };
  }

  render() {
    return <div className="App">Hello World</div>;
  }
}
