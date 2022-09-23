import React from 'react';
import { useState, useEffect } from 'react';
import DisplayQuote from '../displayQuote/displayQuote';

const DisplayQuotes = ({quotes}) => {

  const refreshPage = ()=>{
    window.location.reload();
  }

  return(
    <section className="coin-tracker">
      <div className="title">
        <h1>Market Live</h1>
        <div className="btn">
          <button onClick={ refreshPage }>refresh</button>
        </div>
      </div>
      <div className="result">
        {quotes.map(quote => (
          <DisplayQuote coin={quote}/>
        ))}
      </div>
    </section>
  );
};

export default DisplayQuotes;