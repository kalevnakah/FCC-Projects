import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './App.scss';
import Controller from './components/Controller';
import DrumPad from './components/DrumPad';
import DrumSet1 from './DrumSet1.tsx';

const App = () => {
  const [power, setPower] = useState(true);
  const [pressed, setPressed] = useState('Top Hat');
  const [drumset, setDrumSet] = useState(DrumSet1);
  const [volume, setVolume] = useState(25);

  const updateVolume = (newVolume: number) => {
    setVolume(newVolume);
    setPressed('Volume: ' + newVolume);
  };

  useEffect(() => {
    const clips = document.querySelectorAll<HTMLAudioElement>('.clip');
    clips.forEach((audio) => (audio.volume = volume / 100));
  });

  const DrumPadLayout = drumset
    .map((pad, i) => (
      <Col xs="4" key={`col-${i}`} className="p-1">
        <DrumPad
          key={pad.id}
          pad={pad}
          volume={volume}
          setPressed={setPressed}
          power={power}
        />
      </Col>
    ))
    .reduce((rows: any[], col, index) => {
      let currentRow: any[];
      if (index % 3 === 0) {
        currentRow = [];
        rows.push(currentRow);
      } else {
        currentRow = rows[rows.length - 1];
      }
      currentRow.push(col);
      return rows;
    }, [])
    .map((cols, i) => (
      <Row key={`row-${i}`} className="p-1">
        {cols}
      </Row>
    ));

  return (
    <div className="App align-items-center text-center">
      <h1 className="p-5 text-color">Drum Machine</h1>
      <Row>
        <Col md="6">
          <Container className="pad-color p-4">{DrumPadLayout}</Container>
        </Col>
        <Col md="6">
          <Controller
            pressed={pressed}
            volume={volume}
            updateVolume={updateVolume}
            setPower={setPower}
            power={power}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
