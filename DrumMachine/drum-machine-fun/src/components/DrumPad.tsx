import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

type drumPadProps = {
  key: string;
  pad: object;
  volume: number;
  setPressed: Function;
  power: boolean;
};

type padProps = {
  id: string;
  name: string;
  path: string;
  key: number;
};

const DrumPad = (props: drumPadProps) => {
  const { id, name, path, key } = props.pad as padProps;

  const sound = () => {
    const audioElem = document.getElementById(id) as HTMLAudioElement;
    if (audioElem != null || undefined) {
      audioElem.play();
    }
  };

  const activate = () => {
    const btn = document.getElementById('b' + id) as HTMLElement;
    btn.classList.replace('bg-black', 'bg-primary');
    setTimeout(() => btn.classList.replace('bg-primary', 'bg-black'), 100);
  };

  const updateButtonPressed = () => {
    props.setPressed(name);
  };

  const btnClick = () => {
    sound();
    activate();
    updateButtonPressed();
  };

  const keyPress = (event: { keyCode: any }) => {
    if (event.keyCode === key && props.power) {
      sound();
      activate();
      updateButtonPressed();
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
      disabled={!props.power}
    >
      <h1 id={'h' + id}>{id}</h1>
      <audio className="clip" src={path} id={id}></audio>
    </Button>
  );
};

export default DrumPad;
