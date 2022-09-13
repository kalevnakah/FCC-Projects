import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <div>
          <i className="bi bi-twitter" />
        </div>
        <div>
          <i className="bi bi-linkedin" />
        </div>
        <Button>Click Here!</Button>
      </div>
    );
  }
}
