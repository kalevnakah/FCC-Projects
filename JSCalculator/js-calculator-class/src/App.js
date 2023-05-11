import './App.scss';
import './';
import React, { Component } from 'react';
import Push from './components/Push';
import { evaluate } from 'mathjs';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
      answer: '0',
      last: '0',
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

  clearDisplay = () => {
    this.setState({ display: '', answer: '0' });
  };

  calculate = () => {
    let newAnswer = '';
    if (this.state.display !== '') {
      newAnswer = evaluate(this.state.display);
    }
    this.setState({ answer: newAnswer, display: newAnswer });
  };

  operator = (operator) => {
    const last = this.state.last;
    const display = this.state.display;
    const reOp = /[/*+-]/g;
    const reNumAndOp = /([\d.][/*+-]{1})$/g;
    const reNumAndTwoOp = /([\d.][/*+-]{2,})$/g;
    const isNumber = !reOp.test(last);
    if (isNumber) {
      this.setDisplay(operator);
    } else if (reNumAndOp.test(display)) {
      const minusOneString = display.slice(0, -1);
      this.setState({ display: minusOneString + operator, last: operator });
    } else if (reNumAndTwoOp.test(display)) {
      const minusTwoString = display.slice(0, display.length - 2);
      this.setState({ display: minusTwoString + operator, last: operator });
    }
  };

  minus = (minus) => {
    const reNumAndOp = /([\d.][/*+-]?)$/g;
    const display = this.state.display;
    const minusOneString = display.slice(0, -1);
    if (reNumAndOp.test(this.state.display)) {
      this.setDisplay(minus);
    } else {
      this.setState({ display: minusOneString + minus, last: minus });
    }
  };

  decimal = (decimal) => {
    const re = /([.]{1}[\d]*)$/g;
    if (re.test(this.state.display)) return;
    this.setDisplay(decimal);
  };

  leadingZero = (zero) => {
    const last = this.state.last;
    const reOp = /[\d.]/g;
    if (reOp.test(last) && last !== '') {
      this.setDisplay(zero);
    }
  };

  render() {
    const setDisplay = this.setDisplay;
    const operator = this.operator;
    const minus = this.minus;
    const decimal = this.decimal;

    return (
      <div className="App align-items-center text-center">
        <div id="display" className="pad-grid container">
          <h3 className="read-out grid-span-four">{this.state.display}</h3>
          <h1 className="total grid-span-four">{this.state.answer}</h1>
          <Push
            className={'grid-span-two btn btn-danger'}
            symbol={'AC'}
            calculate={this.clearDisplay}
          ></Push>
          <Push
            symbol={'/'}
            calculate={operator}
            className={'btn btn-info'}
          ></Push>
          <Push
            symbol={'*'}
            calculate={operator}
            className={'btn btn-info'}
          ></Push>
          <Push
            symbol={'7'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'8'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'9'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'-'}
            calculate={minus}
            className={'btn btn-info'}
          ></Push>
          <Push
            symbol={'4'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'5'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'6'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'+'}
            calculate={operator}
            className={'btn btn-info'}
          ></Push>
          <Push
            symbol={'1'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'2'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            symbol={'3'}
            calculate={setDisplay}
            className={'btn btn-secondary'}
          ></Push>
          <Push
            className={'grid-span-row-two btn btn-success'}
            symbol={'='}
            calculate={this.calculate}
          ></Push>
          <Push
            className={'grid-span-two btn btn-primary'}
            symbol={'0'}
            calculate={this.leadingZero}
          ></Push>
          <Push
            className={'btn btn-warning'}
            symbol={'.'}
            calculate={decimal}
          ></Push>
        </div>
      </div>
    );
  }
}
