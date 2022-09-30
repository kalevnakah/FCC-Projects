import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Push extends Component {
  render() {
    return (
      <Button onClick={this.props.formula} key={this.props.key}>
        <h1>Hello {this.props.symbol}</h1>
      </Button>
    );
  }
}
