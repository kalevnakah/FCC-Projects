import './App.scss';
import React, { Component } from 'react';
import Push from './components/Push';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: '',
    };
    this.setFormula = this.setFormula.bind(this);
  }

  setFormula = (){
    this.setState({ formula: '1' });
  };

  render() {
    return (
      <div className="App">
        <Push symbol={'1'} formula={this.setFormula}></Push>
      </div>
    );
  }
}
