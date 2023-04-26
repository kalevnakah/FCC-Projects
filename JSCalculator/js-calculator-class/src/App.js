import './App.scss';
import React, { Component } from 'react';
import Push from './components/Push';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '42',
      answer: '0',
      last: '',
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.removeLastFromDisplay = this.removeLastFromDisplay.bind(this);
  }

  setDisplay = (pushed) => {
    const newString = this.state.display + pushed;
    this.setState({ display: newString, last: pushed });
  };

  removeLastFromDisplay = () => {
    const minusOneString = this.state.display.slice(0, -1);
    console.log(minusOneString);
    this.setDisplay(minusOneString);
  };

  leadingZero = () => {};

  clearDisplay = () => {
    this.setState({ display: '0' });
  };

  calculate = () => {
    const re = /^([-+]? ?(d+|(g<1>))( ?[-+*/] ?g<1>)?)$/;
    let arr = this.state.display.split(re);
    console.log(arr);
    // arr.map((arrItem) => {
    //   Number(arrItem);
    // });
  };

  operator = (operator) => {
    const last = this.state.last;
    const display = this.state.display;
    const minusOneString = display.slice(0, -1);
    const re = /[+*/]/;
    if (re.test(last)) {
      this.setState({ display: minusOneString + operator, last: operator });
    } else {
      this.setDisplay(operator);
    }
  };

  minus = (minus) => {};

  decimal = (decimal) => {};

  render() {
    const setDisplay = this.setDisplay;
    const operator = this.operator;
    const minus = this.minus;
    const decimal = this.decimal;

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
        <Push symbol={'.'} calculate={decimal}></Push>
        <Push symbol={'+'} calculate={operator}></Push>
        <Push symbol={'-'} calculate={minus}></Push>
        <Push symbol={'*'} calculate={operator}></Push>
        <Push symbol={'/'} calculate={operator}></Push>
        <Push symbol={'='} calculate={this.calculate}></Push>
      </div>
    );
  }
}
