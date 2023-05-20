import { Button } from 'react-bootstrap';

type sessionProps = {
  sessionTime: number;
  incSession: Function;
  decSession: Function;
};

const Session = ({ sessionTime, incSession, decSession }: sessionProps) => {
  return (
    <div>
      <div className="setter-box box">
        <div id="session-label">Session Length</div>
        <div className="setter-controls">
          <Button
            id="session-decrement"
            style={{ border: 'solid, 1px' }}
            onClick={() => {
              decSession();
            }}
          >
            -
          </Button>
          <div id="session-length">{sessionTime}</div>
          <Button
            id="session-increment"
            style={{ border: 'solid, 1px' }}
            onClick={() => {
              incSession();
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Session;
