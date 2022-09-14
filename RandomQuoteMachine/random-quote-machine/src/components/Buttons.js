import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <FontAwesomeIcon icon="fab fa-twitter-square" />
        </a>
        <a id="tumbler-quote" href="twitter.com/intent/tweet">
          <FontAwesomeIcon icon="fab fa-tumblr-square" />
        </a>
        <Button id="new-quote">New Quote</Button>
      </div>
    );
  }
}
