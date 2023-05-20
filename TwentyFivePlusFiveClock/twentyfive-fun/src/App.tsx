import { useState, useRef } from 'react';
import './App.scss';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import song from './ticktock.mp3';

const App = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timeDisplay, setTimeDisplay] = useState('25:00');
  const [play, setPlay] = useState(false);
  const [breakState, setBreakstate] = useState(false);
  let toggleTimer = useRef(0);
  let timeLeft = useRef(1500000);

  const audio = new Audio(song);

  const updateTimeDisplay = (distance = timeLeft.current) => {
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let time =
      (minutes > 9 ? minutes : '0' + minutes) +
      ':' +
      (seconds > 9 ? seconds : '0' + seconds);
    setTimeDisplay(time);
  };

  const incSession = (): void => {
    if (play === false && sessionTime < 60) {
      let newSessionTime = sessionTime + 1;
      setSessionTime(newSessionTime);
      if (!breakState) {
        resetCounter(newSessionTime);
      }
    }
  };

  const decSession = (): void => {
    if (play === false && sessionTime > 1) {
      let newSessionTime = sessionTime - 1;
      setSessionTime(newSessionTime);
      if (!breakState) {
        resetCounter(newSessionTime);
      }
    }
  };

  const incBreak = (): void => {
    if (play === false && breakTime < 60) {
      let newBreakTime = breakTime + 1;
      setBreakTime(newBreakTime);
      if (breakState) {
        resetCounter(newBreakTime);
      }
    }
  };

  const decBreak = (): void => {
    if (play === false && breakTime > 1) {
      let newBreakTime = breakTime - 1;
      7;
      setBreakTime(newBreakTime);
      if (breakState) {
        resetCounter(newBreakTime);
      }
    }
  };

  const startStop = (start = !play) => {
    console.log('Button pressed');
    setPlay(start);
    //console.log('TL' + timeLeft);
    console.log('Play: ' + start);
    if (start === true) {
      toggleTimer.current = setInterval(() => {
        timeLeft.current = timeLeft.current - 1000;
        console.log('dt:' + timeLeft.current);
        updateTimeDisplay();
        if (timeLeft.current < 0) {
          console.log('change counter and clearing');
          switchCounter();
        }
      }, 1000);
    } else {
      console.log('clearing');
      clearInterval(toggleTimer.current);
    }
  };

  const switchCounter = () => {
    clearInterval(toggleTimer.current);
    let newBreakState = !breakState;
    setBreakstate(newBreakState);
    if (newBreakState) {
      resetCounter(breakTime, true);
    } else {
      resetCounter(sessionTime, true);
    }
    audio.play();
    startStop(true);
  };

  const resetCounter = (newSessionTime = sessionTime, onOff = false): void => {
    console.log('resetting');
    let milSec = newSessionTime * 60 * 1000;
    startStop(onOff);
    console.log('switch');
    timeLeft.current = milSec;
    updateTimeDisplay();
  };

  return (
    <div>
      <div id="main-title">The Take Back Clock</div>
      <Timer
        timeDisplay={timeDisplay}
        startStop={startStop}
        resetCounter={resetCounter}
        breakState={breakState}
      />
      <div className="flex">
        <Break breakTime={breakTime} incBreak={incBreak} decBreak={decBreak} />
        <Session
          sessionTime={sessionTime}
          incSession={incSession}
          decSession={decSession}
        />
      </div>
      <div>Designed and Coded by Crosswalk Coder</div>
    </div>
  );
};

export default App;
