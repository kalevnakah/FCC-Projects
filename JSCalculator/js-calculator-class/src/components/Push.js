import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Push extends Component {
  render() {
    const { symbol, calculate } = this.props;
    return (
      <Button onClick={() => calculate(symbol)} key={symbol}>
        <h1>{symbol}</h1>
      </Button>
    );
  }
}
