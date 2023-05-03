import React, { Component } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5,
      sessionTime: 25,
      timeLeft: 1500000,
      timeDisplay: '25:00',
      play: true,
      breakState: false,
    };

    this.countDown = this.countDown.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.incSession = this.incSession.bind(this);
    this.decSession = this.decSession.bind(this);
    this.incBreak = this.incBreak.bind(this);
    this.decBreak = this.decBreak.bind(this);
  }

  incSession() {
    if (this.state.play) {
      let newSessionTime = this.state.sessionTime + 1;
      this.setState({ sessionTime: newSessionTime });
      if (!this.state.breakState) {
        this.resetCounter(newSessionTime);
      }
    }
  }

  decSession() {
    if (this.state.play) {
      let newSessionTime = this.state.sessionTime - 1;
      this.setState({ sessionTime: newSessionTime });
      if (!this.state.breakState) {
        this.resetCounter(newSessionTime);
      }
    }
  }

  incBreak() {
    if (this.state.play) {
      let newBreakTime = this.state.breakTime + 1;
      this.setState({ breakTime: newBreakTime });
      if (this.state.breakState) {
        this.resetCounter(newBreakTime);
      }
    }
  }

  decBreak() {
    if (this.state.play) {
      let newBreakTime = this.state.breakTime - 1;
      this.setState({ breakTime: newBreakTime });
      if (this.state.breakState) {
        this.resetCounter(newBreakTime);
      }
    }
  }

  countDown() {
    this.setState({ play: !this.state.play });
    let x = setInterval(() => {
      let distance = this.state.timeLeft - 1000;
      if (!this.state.play) {
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
          timeDisplay: minutes + ':' + seconds,
          timeLeft: distance,
        });
      }
      if (distance <= 0) {
        clearInterval(x);
        this.switchCounter();
      }
    }, 1000);
  }

  switchCounter() {
    let newBreakState = !this.state.breakState;
    this.setState({ breakState: newBreakState });
    if (newBreakState) {
      this.resetCounter(this.state.breakTime);
    } else {
      this.resetCounter();
    }
    this.setState({ play: true });
    this.countDown();
  }

  resetCounter(sessionTime = this.state.sessionTime) {
    let milSec = sessionTime * 60 * 1000;
    let fTime = sessionTime + ':00';
    this.setState({ timeLeft: milSec, timeDisplay: fTime });
  }

  render() {
    const { breakTime, sessionTime, timeDisplay } = this.state;
    return (
      <div>
        <div id="main-title">"25 + 5 Clock"</div>
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
        <Timer
          timeDisplay={timeDisplay}
          resetCounter={this.resetCounter}
          countDown={this.countDown}
        />
        <div>Designed and Coded by Crosswalk Coder</div>
      </div>
    );
  }
}

export default App;
