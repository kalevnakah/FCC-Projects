import React, { Component } from 'react';
import Buttons from '../components/Buttons';

export default class quote extends Component {
  render() {
    return (
      <div id="#quote-box">
        <blockquote id="text" className="blockquote">
          <i className="bi bi-quote h1 text-warning me-2"></i>Put a quote here!
        </blockquote>
        <p id="author" className="fs-6 text-end">
          - Author Goes Here
        </p>
        <Buttons />
      </div>
    );
  }
}
