import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Push extends Component {
  render() {
    const { className, symbol, calculate } = this.props;
    return (
      <Button
        className={className}
        onClick={() => calculate(symbol)}
        key={symbol}
      >
        <h1 className="p-3">{symbol}</h1>
      </Button>
    );
  }
}
