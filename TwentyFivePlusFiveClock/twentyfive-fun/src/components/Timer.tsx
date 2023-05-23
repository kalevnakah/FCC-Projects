import { Button } from 'react-bootstrap';

type timerProps = {
  time: number;
  onPlay: Function;
  onReset: Function;
  breakState: boolean;
};

const Timer = ({ time, onPlay, onReset, breakState }: timerProps) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  let formattedTime =
    (minutes > 9 ? minutes : '0' + minutes) +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);

  return (
    <div className=" box">
      <div id="timer-label">{breakState ? 'Break' : 'Session'}</div>
      <div id="time-left">{formattedTime}</div>
      <Button
        className="btn btn-success"
        id="start_stop-quote"
        onClick={() => onPlay()}
      >
        {'\u23F5\u23F8'}{' '}
      </Button>
      <Button className="btn btn-success" id="reset" onClick={() => onReset()}>
        {'\u21BA'}
      </Button>
    </div>
  );
};

export default Timer;
