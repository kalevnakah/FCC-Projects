import React, { Component } from 'react';

export class Timer extends Component {
  render() {
    return (
      <div>
        <div id="timer-label">Session/Break</div>
        <div id="time-left">25:00</div>
        <div id="start_stop">Start/Stop</div>
        <div id="reset">Reset</div>
      </div>
    );
  }
}

export default Timer;
