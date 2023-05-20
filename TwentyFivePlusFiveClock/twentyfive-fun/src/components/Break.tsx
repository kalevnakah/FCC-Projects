import { Button } from 'react-bootstrap';

type breakProps = {
  breakTime: number;
  incBreak: Function;
  decBreak: Function;
};

const Break = ({ breakTime, incBreak, decBreak }: breakProps) => {
  return (
    <div className="setter-box box">
      <div id="break-label">Break Length</div>
      <div className="setter-controls">
        <Button
          id="session-decrement"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            decBreak();
          }}
        >
          -
        </Button>
        <div id="break-length">{breakTime}</div>
        <Button
          id="session-increment"
          style={{ border: 'solid, 1px' }}
          onClick={() => {
            incBreak();
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Break;
