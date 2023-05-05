import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Session extends Component {
  render() {
    const { sessionTime, incSession, decSession } = this.props;
    return (
      <div className="setter-box box">
        <div id="session-label">Session Length</div>
        <div className="setter-controls">
          <Button
            id="session-decrement"
            style={{ border: 'solid, 1px' }}
            onClick={() => {
              decSession();
            }}
          >
            -
          </Button>
          <div id="session-length">{sessionTime}</div>
          <Button
            id="session-increment"
            style={{ border: 'solid, 1px' }}
            onClick={() => {
              incSession();
            }}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}

export default Session;
