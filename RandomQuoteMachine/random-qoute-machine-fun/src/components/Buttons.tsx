import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type buttonProps = {
  quote: string;
  author: string;
  color: number;
  getRandomQuote: Function;
};

const Buttons = ({ quote, author, color, getRandomQuote }: buttonProps) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <a
          className="me-3"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'square-twitter']}
            className={`color-${color} fs-1`}
          />
        </a>
        <a
          id="tumbler-quote"
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,crosswalkcoder&caption=${author}&content= ${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'tumblr-square']}
            className={`color-${color} fs-1`}
          />
        </a>
      </div>
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
};

export default Buttons;
