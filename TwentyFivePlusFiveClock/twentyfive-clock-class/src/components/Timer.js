import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Timer extends Component {
  render() {
    const { timeDisplay, startStop, resetCounter, breakState } = this.props;
    return (
      <div>
        <div id="timer-label">{breakState ? 'Break  ' : 'Session'}</div>
        <div id="time-left">{timeDisplay}</div>
        <Button
          id="start_stop-quote"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            startStop();
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
