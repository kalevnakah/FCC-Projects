import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

type drumPadProps = {
  key: string;
  pad: object;
  volume: number;
  setPressed: Function;
  power: boolean;
};

const DrumPad = (props: drumPadProps) => {
  const [powerState, setPower] = useState(props.power);
  const { id, name, path, key } = props.pad;

  const sound = (id: string) => {
    document.getElementById(id).play();
  };

  const activate = (id: string) => {
    const btn = document.getElementById('b' + id);
    btn.classList.replace('bg-black', 'bg-primary');
    setTimeout(() => btn.classList.replace('bg-primary', 'bg-black'), 100);
  };

  const updateButtonPressed = () => {
    props.setPressed(name);
  };

  const btnClick = () => {
    sound;
    activate;
    updateButtonPressed;
  };

  const keyPress = (event) => {
    if (event.keyCode === key && props.power) {
      sound;
      activate;
      updateButtonPressed;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return function cleanup() {
      document.removeEventListener('keydown', keyPress);
    };
  });

  return (
    <Button
      className="bg-black rounded-4 w-100 h-100 p-4"
      size="lg"
      onClick={btnClick}
      id={'b' + id}
      disabled={props.power}
    >
      <h1 id={'h' + id}>{id}</h1>
      <audio className="clip" src={path} id={id}></audio>
    </Button>
  );
};

export default DrumPad;
