import './App.scss';
import React, { Component } from 'react';
import Push from './components/Push';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '42',
      answer: '0',
    };
    this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay = (pushed) => {
    const newString = this.state.display + pushed;
    this.setState({ display: newString });
  };

  leadingZero = () => {};

  clearDisplay = () => {
    this.setState({ display: '0' });
  };

  calculate = () => {
    const re = '^([-+]? ?(d+|(g<1>))( ?[-+*/] ?g<1>)?)$';
    let arr = this.state.display.split(re);
    console.log(arr);
    // arr.map((arrItem) => {
    //   Number(arrItem);
    // });
  };

  operation = (operator) => {
    //get the last number or operator
    const last = this.state.display.slice(-1);
    console.log(last);
    // check if last entered is "-" or "."
    if (['-', '.'].includes(last)) {
      console.log('-.');
      // Check for duplicates
      if (last !== operator) {
        this.setDisplay(operator);
      }
    }
    //check if last entered is +,/,x and ignore it if it is.
    else if (!['+', 'x', '/'].includes(last)) {
      this.setDisplay(operator);
    }
  };

  render() {
    const setDisplay = this.setDisplay;
    const operation = this.operation;
    return (
      <div className="App">
        <div id="display">
          <h1>{this.state.display}</h1>
          <h1>Answer</h1>
        </div>
        <Push symbol={'C'} calculate={this.clearDisplay}></Push>
        <Push symbol={'0'} calculate={this.leadingZero}></Push>
        <Push symbol={'1'} calculate={setDisplay}></Push>
        <Push symbol={'2'} calculate={setDisplay}></Push>
        <Push symbol={'3'} calculate={setDisplay}></Push>
        <Push symbol={'4'} calculate={setDisplay}></Push>
        <Push symbol={'5'} calculate={setDisplay}></Push>
        <Push symbol={'6'} calculate={setDisplay}></Push>
        <Push symbol={'7'} calculate={setDisplay}></Push>
        <Push symbol={'8'} calculate={setDisplay}></Push>
        <Push symbol={'9'} calculate={setDisplay}></Push>
        <Push symbol={'.'} calculate={operation}></Push>
        <Push symbol={'+'} calculate={operation}></Push>
        <Push symbol={'-'} calculate={operation}></Push>
        <Push symbol={'x'} calculate={operation}></Push>
        <Push symbol={'/'} calculate={operation}></Push>
        <Push symbol={'='} calculate={this.calculate}></Push>
      </div>
    );
  }
}
