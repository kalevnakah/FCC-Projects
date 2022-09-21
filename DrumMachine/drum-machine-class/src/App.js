import './App.css';
import DrumPad from './components/DrumPad';

export default class App extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="App">
        Drum Machine
        <DrumPad />
      </div>
    );
  }
}
