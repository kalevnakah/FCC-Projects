import React, { Component } from 'react';
import Buttons from '../components/Buttons';

export default class Quote extends Component {
  render() {
    const { quote, author, color } = this.props;
    return (
      <div id="#quote-box" className="bg-white">
        <blockquote id="text" className={`blockquote color-${color}`}>
          <i className={`bi bi-quote h1 me-2`}></i>
          {quote}
        </blockquote>
        <p id="author" className={`fs-6 text-end color-${color}`}>
          - {author}
        </p>
        <Buttons quote={quote} author={author} color={color} />
      </div>
    );
  }
}
