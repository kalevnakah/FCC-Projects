import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
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
      volume: 25,
    };
    this.togglePower = this.togglePower.bind(this);
  }

  togglePower = (onOff) => {
    this.setState({ power: onOff });
  };

  getPowerState = () => {
    return this.state.power;
  };

  setButtonPressed = (keyName) => {
    this.setState({ pressed: keyName });
  };

  updateVolume = (volume) => {
    this.setState({
      volume: volume,
      pressed: `Volume: ${volume}`,
    });
  };

  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    const clips = document.querySelectorAll('.clip');
    clips.forEach((audio) => (audio.volume = this.state.volume / 100));
    return (
      <div className="App">
        Drum Machine
        <Container className="w-50">
          {this.state.drumset.map((pad) => (
            <DrumPad
              key={pad.id}
              pad={pad}
              volume={this.state.volume}
              setButtonPressed={this.setButtonPressed}
              power={this.getPowerState()}
            />
          ))}
        </Container>
        <Controller
          power={this.power}
          pressed={this.state.pressed}
          volume={this.state.volume}
          updateVolume={this.updateVolume}
          togglePower={this.togglePower}
          getPowerState={this.getPowerState}
        />
      </div>
    );
  }
}
