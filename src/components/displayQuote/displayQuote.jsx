import React from 'react';

const DisplayQuote = ({coin}) => {
  const {id, name , symbol , quotes} = coin;

  
  return(
    <>
      <ul>
        <li>{name}</li>
        <li>{symbol}</li>
        <li>{quotes.USD.price}</li>
        <li>{quotes.USD.percent_change_24h}</li>
      </ul>
    </>
  );
};

export default DisplayQuote;