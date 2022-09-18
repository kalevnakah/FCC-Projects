import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Buttons extends Component {
  render() {
    const { quote, author, color, getRandomQuote } = this.props;
    return (
      <div>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <FontAwesomeIcon
            icon="fab fa-twitter-square"
            className={`color-${color}`}
          />
        </a>
        <a id="tumbler-quote" href="twitter.com/intent/tweet">
          <FontAwesomeIcon
            icon="fab fa-tumblr-square"
            className={`color-${color}`}
          />
        </a>
        <Button
          id="new-quote"
          className={`bg-color-${color}`}
          style={{ border: 'none' }}
          onClick={() => {
            getRandomQuote();
          }}
        >
          New Quote
        </Button>
      </div>
    );
  }
}
