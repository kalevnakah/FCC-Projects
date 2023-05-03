import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Session extends Component {
  render() {
    const { sessionTime, incSession, decSession } = this.props;
    return (
      <div>
        <div id="session-label">Session Length</div>
        <Button
          id="session-decrement"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            decSession();
          }}
        >
          "DOWN"
        </Button>
        <div id="session-length">{sessionTime}</div>
        <Button
          id="session-increment"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            incSession();
          }}
        >
          "UP"
        </Button>
      </div>
    );
  }
}

export default Session;
