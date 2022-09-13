import React, { Component } from 'react';

export default class quote extends Component {
  render() {
    return (
      <div>
        <blockquote className="blockquote">
          <i className="bi bi-quote h1 text-warning me-2"></i>Put a quote here!
        </blockquote>
        <p className="fs-6 text-end">- Author Goes Here</p>
      </div>
    );
  }
}
