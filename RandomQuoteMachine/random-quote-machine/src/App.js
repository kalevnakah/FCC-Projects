import logo from './logo.svg';
import './App.scss';
import { Container } from 'react-bootstrap';
import Quote from './components/Quote';
import Buttons from './components/Buttons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

function App() {
  return (
    <div className="App">
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <Quote />
        <Buttons />
      </Container>
      <h6>by Crosswalk Coder</h6>
    </div>
  );
}

export default App;
