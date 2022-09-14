import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
import Quote from './components/Quote';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import quote from './components/Quote';
library.add(fab);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      quotes: '',
    };
  }

  // Fetch Tasks
  async fetchTasks() {
    const res = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    const data = await res.json();
    this.setState({ quotes: data.quotes });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <Quote />
        </Container>
        <h6>by Crosswalk Coder</h6>
      </div>
    );
  }
}
