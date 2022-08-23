import './App.css';
import React from 'react';
import quoteData from "./quotes.json"

function App() {
  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random()*4) + 1;
    return quoteData[randomNumber]
  }

  const [quote, setQuote] = React.useState(() => {
    return randomQuote()
  })

  const handleClick = () => {
    setQuote(() => {
      return randomQuote()
    })
  }

  return (
    <div className="App">
      <div id="quote-box">
        <p id='text'><span id='double-quote-mark'>"</span>{quote.quote}</p>
        <p id='author'> - {quote.author}</p>
        <div className="buttons">
          <div className='a-tags'>
            <div className="each-tag">
              <a href="https://twitter.com/intent/tweet" id='tweet-quote'><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="each-tag">
              <a href="https://www.tumblr.com"><i class="fa-brands fa-tumblr" id='tumblr'></i></a>
            </div>            
          </div>
          <button id='new-quote' onClick={handleClick}>New quote</button>
        </div>

      </div>
    </div>
  );
}

export default App;
