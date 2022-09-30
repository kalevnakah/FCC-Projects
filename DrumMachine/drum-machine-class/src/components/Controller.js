import React, { Component } from 'react';
import { ToggleButton, Stack } from 'react-bootstrap';

export default class Controller extends Component {
  changeVolume = (e) => {
    this.props.updateVolume(e.target.value);
  };

  render() {
    return (
      <Stack gap={5} className="m-5">
        <ToggleButton
          className="p-4 container"
          id="toggle-check"
          type="checkbox"
          variant="outline-success"
          checked={this.props.power}
          value="1"
          onChange={(e) => this.props.togglePower(e.currentTarget.checked)}
        >
          <h1>Power</h1>
        </ToggleButton>
        <div className="container">
          <h1 className="p-3 pad-color">
            {this.props.power && this.props.pressed
              ? this.props.pressed
              : 'Off'}
          </h1>
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value={this.props.volume}
            className="slider w-100"
            id="myRange"
            onChange={this.changeVolume}
            disabled={!this.props.power}
          />
          <h3 className="text-color">Volume</h3>
        </div>
      </Stack>
    );
  }
}
