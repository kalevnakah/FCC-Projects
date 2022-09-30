import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
    const DrumPadLayout = this.state.drumset
      .map((pad, i) => (
        <Col xs="4" key={`col-${i}`} className="p-1">
          <DrumPad
            key={pad.id}
            pad={pad}
            volume={this.state.volume}
            setButtonPressed={this.setButtonPressed}
            power={this.state.power}
          />
        </Col>
      ))
      .reduce((rows, col, index) => {
        let currentRow;
        if (index % 3 === 0) {
          currentRow = [];
          rows.push(currentRow);
        } else {
          currentRow = rows[rows.length - 1];
        }
        currentRow.push(col);
        return rows;
      }, [])
      .map((cols, i) => (
        <Row key={`row-${i}`} className="p-1">
          {cols}
        </Row>
      ));

    return (
      <div className="App align-items-center text-center">
        <h1 className="p-5 text-color">Drum Machine</h1>
        <Row>
          <Col md="6">
            <Container className="pad-color p-4">{DrumPadLayout}</Container>
          </Col>
          <Col md="6">
            <Controller
              pressed={this.state.pressed}
              volume={this.state.volume}
              updateVolume={this.updateVolume}
              togglePower={this.togglePower}
              power={this.state.power}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
