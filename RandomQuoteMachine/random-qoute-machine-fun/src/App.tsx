import { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Quote from './components/Quote';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

function App() {
  const [color, setColor] = useState(10);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(
    'Strive not to be a success, but rather to be of value.'
  );
  const [author, setAuthor] = useState('Albert Einstein');

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch Tasks
  const fetchTask = async (params:type) => {
    const res = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    const data = await res.json();
    setQuotes({ ...data.quotes });
    getRandomQuote();
  }
  async fetchTasks = () => {

  };

  const getRandomQuote = () => {
    if (quotes[0]) {
      const randomIndex = Math.floor(
        Math.random() * Object.keys(quotes).length
      );
      const { quote, author } = quotes[randomIndex];
      setQuote(quote);
      setAuthor(author);
      changeColor();
    }
  };

  const changeColor = () => {
    const colorIndex = Math.ceil(Math.random() * 10);
    setColor(colorIndex);
  };

  return (
    <div className={`App bg-color-${color} vh-100 `}>
      <Container className={'p-5 w-auto'}>
        <Quote
          quote={quote}
          author={author}
          color={color}
          getRandomQuote={getRandomQuote}
        />
      </Container>
      <h6>by Crosswalk Coder</h6>
    </div>
  );
}

export default App;
