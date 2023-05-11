import { useState } from 'react';
import { evaluate } from 'mathjs';
import Push from './components/Push.tsx';
import './App.scss';

const App = () => {
  const [display, setDisplay] = useState('');
  const [answer, setAnswer] = useState('0');
  const [last, setLast] = useState('0');

  const updateDisplay = (pushed: string) => {
    const newString = display + pushed;
    setDisplay(newString);
    setLast(pushed);
  };

  const clearDisplay = () => {
    setDisplay('');
    setAnswer('0');
  };

  const calculate = () => {
    let newAnswer = '';
    if (display !== '') {
      newAnswer = evaluate(display);
    }
    setAnswer(newAnswer);
    setDisplay(newAnswer);
  };

  const operator = (operator: string) => {
    const reOp = /[/*+-]/g;
    const reNumAndOp = /([\d.][/*+-]{1})$/g;
    const reNumAndTwoOp = /([\d.][/*+-]{2,})$/g;
    const isNumber = !reOp.test(last);
    if (isNumber) {
      updateDisplay(operator);
    } else if (reNumAndOp.test(display)) {
      const minusOneString = display.slice(0, -1);
      setDisplay(minusOneString + operator);
      setLast(operator);
    } else if (reNumAndTwoOp.test(display)) {
      const minusTwoString = display.slice(0, display.length - 2);
      setDisplay(minusTwoString + operator);
      setLast(operator);
    }
  };

  const minus = (minus: string) => {
    const reNumAndOp = /([\d.][/*+-]?)$/g;
    const minusOneString = display.slice(0, -1);
    if (reNumAndOp.test(display)) {
      updateDisplay(minus);
    } else {
      setDisplay(minusOneString + minus);
      setLast(minus);
    }
  };

  const decimal = (decimal: string) => {
    const re = /([.]{1}[\d]*)$/g;
    if (re.test(display)) return;
    updateDisplay(decimal);
  };

  const leadingZero = (zero: string) => {
    const reOp = /[\d.]/g;
    if (reOp.test(last) && last !== '') {
      updateDisplay(zero);
    }
  };

  // const render() {
  //   updateDisplay();
  //   minus();
  //   decimal();
  // }

  return (
    <div className="App align-items-center text-center">
      <div id="display" className="pad-grid container">
        <h3 className="read-out grid-span-four">{display}</h3>
        <h1 className="total grid-span-four">{answer}</h1>
        <Push
          className={'grid-span-two btn btn-danger'}
          symbol={'AC'}
          calculate={clearDisplay}
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
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'8'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'9'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push symbol={'-'} calculate={minus} className={'btn btn-info'}></Push>
        <Push
          symbol={'4'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'5'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'6'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'+'}
          calculate={operator}
          className={'btn btn-info'}
        ></Push>
        <Push
          symbol={'1'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'2'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          symbol={'3'}
          calculate={updateDisplay}
          className={'btn btn-secondary'}
        ></Push>
        <Push
          className={'grid-span-row-two btn btn-success'}
          symbol={'='}
          calculate={calculate}
        ></Push>
        <Push
          className={'grid-span-two btn btn-primary'}
          symbol={'0'}
          calculate={leadingZero}
        ></Push>
        <Push
          className={'btn btn-warning'}
          symbol={'.'}
          calculate={decimal}
        ></Push>
      </div>
    </div>
  );
};

export default App;
