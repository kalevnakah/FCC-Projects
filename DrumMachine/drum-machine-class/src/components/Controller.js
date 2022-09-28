import React, { Component } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default class Controller extends Component {
  changeVolume = (e) => {
    this.props.updateVolume(e.target.value);
  };

  render() {
    return (
      <div>
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-success"
          checked={this.props.power}
          value="1"
          onChange={(e) => this.props.togglePower(e.currentTarget.checked)}
        >
          Power
        </ToggleButton>
        <div>
          <h1>{this.props.pressed}</h1>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value={this.props.volume}
            className="slider"
            id="myRange"
            onChange={this.changeVolume}
            disabled={!this.props.power}
          />
        </div>
      </div>
    );
  }
}
