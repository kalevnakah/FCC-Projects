import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import TimeToggler from './components/TimeToggler';
import Timer from './components/Timer';
import TickTock from './ticktock.mp3';

const App = () => {
  const [isBreak, setIsBreak] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(25 * 60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionTime, setSessionTime] = useState<number>(25 * 60);
  const [breakTime, setBreakTime] = useState<number>(5 * 60);
  const song = new Audio(TickTock);

  const handleTimeUpdate = (time: number, type: string) => {
    let timeInSec = time * 60;
    if (type === 'Session') {
      setSessionTime(timeInSec);
    } else if (type === 'Break') {
      setBreakTime(timeInSec);
    }
    if (isBreak === false && type === 'Session') {
      setCurrentTimeSec(timeInSec);
    } else if (isBreak === true && type === 'Break') {
      setCurrentTimeSec(timeInSec);
    }
  };

  const handlePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    if (isBreak) {
      setCurrentTimeSec(breakTime);
    } else {
      setCurrentTimeSec(sessionTime);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTimeSec((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (currentTimeSec === 0) {
      setIsBreak(!isBreak);
      song.play();
      if (!isBreak) {
        setCurrentTimeSec(breakTime);
      } else {
        setCurrentTimeSec(sessionTime);
      }
    }
  }, [currentTimeSec]);

  return (
    <Container className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <Col>
        <Row xs="12" className="text-center">
          <div id="main-title">The Take Back Clock</div>
        </Row>
        <Row
          xs="12"
          className="d-flex justify-content-center align-items-center text-center"
        >
          <Timer
            time={currentTimeSec}
            onPlay={handlePlay}
            onReset={handleReset}
            breakState={isBreak}
          />
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <TimeToggler
              type="Session"
              time={sessionTime / 60}
              active={!isPlaying}
              onclick={handleTimeUpdate}
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <TimeToggler
              type="Break"
              time={breakTime / 60}
              active={!isPlaying}
              onclick={handleTimeUpdate}
            />
          </Col>
        </Row>
        <Row>
          <div>Designed and Coded by Crosswalk Coder</div>
        </Row>
      </Col>
    </Container>
  );
};

export default App;
