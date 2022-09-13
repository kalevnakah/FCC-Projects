import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon="fab fa-twitter-square" />
        <FontAwesomeIcon icon="fab fa-tumblr-square" />
        <Button>Click Here!</Button>
      </div>
    );
  }
}
