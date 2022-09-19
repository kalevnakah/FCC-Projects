import React, { Component } from 'react';
import Buttons from '../components/Buttons';

export default class Quote extends Component {
  render() {
    const { quote, author, color, getRandomQuote } = this.props;
    return (
      <div id="#quote-box" className="bg-white p-5 mw-50">
        <blockquote id="text" className={`blockquote color-${color} fs-3`}>
          <i className={`bi bi-quote fs-1 me-2`}></i>
          {quote}
        </blockquote>
        <p id="author" className={`fs-5 text-center color-${color}`}>
          - {author}
        </p>
        <Buttons
          quote={quote}
          author={author}
          color={color}
          getRandomQuote={getRandomQuote}
        />
      </div>
    );
  }
}
