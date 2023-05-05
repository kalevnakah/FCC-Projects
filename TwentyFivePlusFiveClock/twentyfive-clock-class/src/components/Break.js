import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Break extends Component {
  render() {
    const { breakTime, incBreak, decBreak } = this.props;
    return (
      <div className="setter-box box">
        <div id="break-label">Break Length</div>
        <div className="setter-controls">
          <Button
            id="session-decrement"
            style={{ border: 'solid, 1px' }}
            onClick={() => {
              decBreak();
            }}
          >
            -
          </Button>
          <div id="break-length">{breakTime}</div>
          <Button
            id="session-increment"
            style={{ border: 'solid, 1px' }}
            onClick={() => {
              incBreak();
            }}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}

export default Break;
