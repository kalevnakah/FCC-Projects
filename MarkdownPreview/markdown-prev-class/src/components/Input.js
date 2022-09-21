import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class Input extends Component {
  render() {
    return (
      <Form.Control
        className="p-5"
        as="textarea"
        rows={45}
        value={this.props.text}
        onChange={this.props.updateMarkdown}
      ></Form.Control>
    );
  }
}
