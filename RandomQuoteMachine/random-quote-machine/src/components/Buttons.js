import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Buttons extends Component {
  render() {
    const { quote, author, color, getRandomQuote } = this.props;
    return (
      <div>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote} Author - ${author}`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon="fab fa-twitter-square"
            className={`color-${color}`}
          />
        </a>
        <a
          id="tumbler-quote"
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,crosswalkcoder&caption=${author}&content= ${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          target="_blank"
        >
          <FontAwesomeIcon
            icon="fab fa-tumblr-square"
            className={`color-${color}`}
          />
        </a>
        <Button
          id="new-quote"
          className={`bg-color-${color}`}
          style={{ border: 'none' }}
          onClick={() => {
            getRandomQuote();
          }}
        >
          New Quote
        </Button>
      </div>
    );
  }
}
