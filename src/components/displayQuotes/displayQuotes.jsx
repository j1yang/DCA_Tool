import React from 'react';
import { useState, useEffect } from 'react';
import DisplayQuote from '../displayQuote/displayQuote';

const DisplayQuotes = (props) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=USD")
      .then(response => response.json())
      .then(json => {
          
      console.log(json.slice(0, 1000));
      setCoins(json.slice(0, 1000));
    });
    
  }, [])
  
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
      {/* 결과 출력 */}
      <div className="result">
        {coins.map(coin => (
          <DisplayQuote coin={coin}/>
        ))}
      </div>
    </section>
  );
};

export default DisplayQuotes;