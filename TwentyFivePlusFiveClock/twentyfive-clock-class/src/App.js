import React, { Component } from 'react';
import './App.scss';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import song from './ticktock.mp3';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25,
      timeLeft: 1500000,
      timeDisplay: '25:00',
      play: false,
      breakState: false,
      audio: new Audio(song),
    };

    this.startStop = this.startStop.bind(this);
    this.countDown = this.countDown.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.incSession = this.incSession.bind(this);
    this.decSession = this.decSession.bind(this);
    this.incBreak = this.incBreak.bind(this);
    this.decBreak = this.decBreak.bind(this);
  }

  incSession() {
    if (!this.state.play && this.state.sessionTime < 60) {
      let newSessionTime = this.state.sessionTime + 1;
      this.setState({ sessionTime: newSessionTime });
      if (!this.state.breakState) {
        this.resetCounter(newSessionTime);
      }
    }
  }

  decSession() {
    if (!this.state.play && this.state.sessionTime > 1) {
      let newSessionTime = this.state.sessionTime - 1;
      this.setState({ sessionTime: newSessionTime });
      if (!this.state.breakState) {
        this.resetCounter(newSessionTime);
      }
    }
  }

  incBreak() {
    if (!this.state.play && this.state.breakTime < 60) {
      let newBreakTime = this.state.breakTime + 1;
      this.setState({ breakTime: newBreakTime });
      if (this.state.breakState) {
        this.resetCounter(newBreakTime);
      }
    }
  }

  decBreak() {
    if (!this.state.play && this.state.breakTime > 1) {
      let newBreakTime = this.state.breakTime - 1;
      this.setState({ breakTime: newBreakTime });
      if (this.state.breakState) {
        this.resetCounter(newBreakTime);
      }
    }
  }

  countDown() {
    const x = setInterval(() => {
      if (this.state.play === true) {
        let distance = this.state.timeLeft - 1000;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
          timeDisplay:
            (minutes > 9 ? minutes : '0' + minutes) +
            ':' +
            (seconds > 9 ? seconds : '0' + seconds),
          timeLeft: distance,
        });
        if (distance < 0) {
          this.switchCounter();
          clearInterval(x);
        }
      } else {
        clearInterval(x);
      }
    }, 1000);
  }

  startStop(start = !this.state.play) {
    this.setState({ play: start });
    this.countDown();
  }

  switchCounter() {
    let newBreakState = !this.state.breakState;
    this.setState({ breakState: newBreakState });
    if (newBreakState) {
      this.resetCounter(this.state.breakTime, true);
    } else {
      this.resetCounter(this.state.sessionTime, true);
    }
    this.state.audio.play();
    this.startStop(true);
  }

  resetCounter(sessionTime = this.state.sessionTime, onOff = false) {
    let milSec = sessionTime * 60 * 1000;
    let fTime = sessionTime + ':00';
    this.setState({ play: onOff, timeLeft: milSec, timeDisplay: fTime });
  }

  render() {
    const { breakTime, sessionTime, timeDisplay, breakState } = this.state;
    return (
      <div>
        <div id="main-title">The Take Back Clock</div>
        <Timer
          timeDisplay={timeDisplay}
          resetCounter={this.resetCounter}
          startStop={this.startStop}
          breakState={breakState}
        />
        <div className="flex">
          <Break
            breakTime={breakTime}
            incBreak={this.incBreak}
            decBreak={this.decBreak}
          />
          <Session
            sessionTime={sessionTime}
            incSession={this.incSession}
            decSession={this.decSession}
          />
        </div>
        <div>Designed and Coded by Crosswalk Coder</div>
      </div>
    );
  }
}

export default App;
