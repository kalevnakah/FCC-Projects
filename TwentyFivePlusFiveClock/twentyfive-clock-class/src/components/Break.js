import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Break extends Component {
  render() {
    const { breakTime, incBreak, decBreak } = this.props;
    return (
      <div>
        <div id="break-label">Break Length</div>
        <Button
          id="session-decrement"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            decBreak();
          }}
        >
          "DOWN"
        </Button>
        <div id="break-length">{breakTime}</div>
        <Button
          id="session-increment"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            incBreak();
          }}
        >
          "UP"
        </Button>
      </div>
    );
  }
}

export default Break;
