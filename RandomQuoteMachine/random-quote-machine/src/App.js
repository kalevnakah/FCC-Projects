import React, { Component } from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Quote from './components/Quote';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 10,
      quotes: {},
      quote: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    };

    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  // Fetch Tasks
  async fetchTasks() {
    const res = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    const data = await res.json();
    this.setState({ quotes: { ...data.quotes } });
    this.getRandomQuote();
  }

  getRandomQuote() {
    if (this.state.quotes[0]) {
      const randomIndex = Math.floor(
        Math.random() * Object.keys(this.state.quotes).length
      );
      const { quote, author } = this.state.quotes[randomIndex];
      this.setState({ quote: quote, author: author });
      this.changeColor();
    }
  }

  changeColor() {
    const colorIndex = Math.ceil(Math.random() * 10);
    this.setState({ color: colorIndex });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    const { quote, author, color } = this.state;
    return (
      <div className={`App bg-color-${color} vh-100 `}>
        <Container className={'p-5 w-auto'}>
          <Quote
            quote={quote}
            author={author}
            color={color}
            getRandomQuote={this.getRandomQuote}
          />
        </Container>
        <h6>by Crosswalk Coder</h6>
      </div>
    );
  }
}
