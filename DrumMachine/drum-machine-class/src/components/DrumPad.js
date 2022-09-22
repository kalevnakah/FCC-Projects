import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.path = props.path;

    this.state = {
      power: this.props.power,
    };

    this.sound = this.sound.bind(this);
    this.activate = this.activate.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  sound = () => {
    document.getElementById(this.id).play();
  };

  activate = () => {
    const btn = document.getElementById('b' + this.id);
    btn.classList.replace('bg-black', 'bg-success');
    setTimeout(() => btn.classList.replace('bg-success', 'bg-black'), 300);
  };

  keyPress = () => {
    this.sound();
    this.activate();
  };

  render() {
    return (
      <Button
        className="drum-pad bg-black"
        onClick={this.keyPress}
        id={'b' + this.id}
      >
        <h1 id={'h' + this.id}>{this.id}</h1>
        <audio className="clip" src={this.path} id={this.id}></audio>
      </Button>
    );
  }
}
