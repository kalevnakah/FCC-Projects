import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Timer extends Component {
  render() {
    const { timeDisplay, countDown, resetCounter } = this.props;
    return (
      <div>
        <div id="timer-label">Session/Break</div>
        <div id="time-left">{timeDisplay}</div>
        <Button
          id="start_stop-quote"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            countDown();
          }}
        >
          "Play / Pause"
        </Button>
        <Button
          id="reset"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            resetCounter();
          }}
        >
          "Reset"
        </Button>
      </div>
    );
  }
}

export default Timer;
