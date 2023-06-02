import { useState } from 'react';
import { Button } from 'react-bootstrap';

type timeTogglerProps = {
  type: string;
  time: number;
  active: boolean;
  onclick: Function;
};

const TimeToggler = ({
  type,
  time = 1,
  active = true,
  onclick,
}: timeTogglerProps) => {
  const [toggleTime, setToggleTime] = useState(time);

  const handleOnClickIncrement = () => {
    if (toggleTime < 60 && active === true) {
      let newToggleTime = toggleTime + 1;
      setToggleTime(newToggleTime);
      onclick(newToggleTime, type);
    }
  };

  const handleOnClickDecrement = () => {
    if (toggleTime > 1 && active === true) {
      let newToggleTime = toggleTime - 1;
      setToggleTime(newToggleTime);
      onclick(newToggleTime, type);
    }
  };

  return (
    <div className="box">
      <div id={type + '-label'}>{type} Length</div>
      <div className="setter-controls">
        <Button
          id={type + '-decrement'}
          className="btn btn-success"
          style={{ border: 'solid, 1px' }}
          onClick={handleOnClickDecrement}
        >
          -
        </Button>
        <div id={type + '-length'}>{toggleTime}</div>
        <Button
          id={type + '-increment'}
          className="btn btn-success"
          style={{ border: 'solid, 1px' }}
          onClick={handleOnClickIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default TimeToggler;
