import React, { Component } from 'react';

export class Session extends Component {
  render() {
    return (
      <div>
        <div id="session-label">Session Length</div>
        <div id="session-decrement">Down</div>
        <div id="session-length">25</div>
        <div id="session-increment">UP</div>
      </div>
    );
  }
}

export default Session;
