import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.id = props.pad.id;
    this.name = props.pad.name;
    this.path = props.pad.path;
    this.key = props.pad.key;

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
    btn.classList.replace('bg-black', 'bg-primary');
    setTimeout(() => btn.classList.replace('bg-primary', 'bg-black'), 100);
  };

  updateButtonPressed = () => {
    this.props.setButtonPressed(this.name);
  };

  btnClick = () => {
    this.sound();
    this.activate();
    this.updateButtonPressed();
  };

  keyPress = (event) => {
    if (event.keyCode === this.key && this.props.power) {
      this.sound();
      this.activate();
      this.updateButtonPressed();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress);
  }

  render() {
    return (
      <Button
        className="bg-black rounded-4 w-100 h-100 p-4"
        size="lg"
        onClick={this.btnClick}
        id={'b' + this.id}
        disabled={!this.props.power}
      >
        <h1 id={'h' + this.id}>{this.id}</h1>
        <audio className="clip" src={this.path} id={this.id}></audio>
      </Button>
    );
  }
}
