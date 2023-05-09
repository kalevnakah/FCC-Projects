import { ToggleButton, Stack } from 'react-bootstrap';

type controllerProps = {
  pressed: string;
  volume: number;
  updateVolume: Function;
  setPower: Function;
  power: boolean;
};

const Controller = (props: controllerProps) => {
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    onchange;
    props.updateVolume(e.target.value);
  };

  return (
    <Stack gap={5} className="m-5">
      <ToggleButton
        className="p-4 container"
        id="toggle-check"
        type="checkbox"
        variant="outline-success"
        checked={props.power}
        value="1"
        onChange={(e) => props.setPower(e.currentTarget.checked)}
      >
        <h1>Power</h1>
      </ToggleButton>
      <div className="container">
        <h1 className="p-3 pad-color">
          {props.power && props.pressed ? props.pressed : 'Off'}
        </h1>
      </div>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={props.volume}
          className="slider w-100"
          id="myRange"
          onChange={changeVolume}
          disabled={!props.power}
        />
        <h3 className="text-color">Volume</h3>
      </div>
    </Stack>
  );
};

export default Controller;
