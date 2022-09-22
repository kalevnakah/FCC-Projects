import React, { Component } from 'react';
import './App.scss';
import Controller from './components/Controller';
import DrumPad from './components/DrumPad';
import DrumSet1 from './DrumSet1.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      pressed: 'Top Hat',
      drumset: DrumSet1,
    };
    this.togglePower = this.togglePower.bind(this);
  }

  togglePower = (onOff) => {
    this.setState({ power: onOff });
  };

  getPowerState = () => {
    return this.state.power;
  };

  render() {
    return (
      <div className="App">
        Drum Machine
        {this.state.drumset.map((pad) => (
          <DrumPad
            id={pad.id}
            name={pad.name}
            path={pad.path}
            power={this.getPowerState()}
          />
        ))}
        <Controller
          power={this.power}
          pressed={this.pressed}
          togglePower={this.togglePower}
          getPowerState={this.getPowerState}
        />
      </div>
    );
  }
}
