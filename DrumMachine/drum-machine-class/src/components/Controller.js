import React, { Component } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default class Controller extends Component {
  render() {
    return (
      <div>
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-success"
          checked={this.props.getPowerState()}
          value="1"
          onChange={(e) => this.props.togglePower(e.currentTarget.checked)}
        >
          Power
        </ToggleButton>
        <div>
          <h1>Top Hat</h1>
        </div>
      </div>
    );
  }
}
