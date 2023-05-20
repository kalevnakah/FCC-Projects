import { Button } from 'react-bootstrap';

type timerProps = {
  timeDisplay: string;
  startStop: Function;
  resetCounter: Function;
  breakState: Boolean;
};

const Timer = ({
  timeDisplay,
  startStop,
  resetCounter,
  breakState,
}: timerProps) => {
  return (
    <div className="box">
      <div id="timer-label">{breakState ? 'Break  ' : 'Session'}</div>
      <div id="time-left">{timeDisplay}</div>
      <Button
        id="start_stop-quote"
        style={{ border: 'solid, 1px' }}
        onClick={() => startStop()}
      >
        {'\u23F5\u23F8'}
      </Button>
      <Button
        id="reset"
        style={{ border: 'solid, 1px' }}
        onClick={() => resetCounter()}
      >
        {'\u21BA'}
      </Button>
    </div>
  );
};

export default Timer;
