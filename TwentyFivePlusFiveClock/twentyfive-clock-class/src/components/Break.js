import React, { Component } from 'react';

export class Break extends Component {
  render() {
    return (
      <div>
        <div id="break-label">Break Length</div>
        <div id="break-decrement">Down</div>
        <div id="break-length">5</div>
        <div id="break-increment">Up</div>
      </div>
    );
  }
}

export default Break;
