import React from 'react';

const DisplayQuote = ({coin}) => {
  const {id, name , symbol , price, percent_change_24h} = coin;

  
  return(
    <>
      <ul>
        <li>{name}</li>
        <li>{symbol}</li>
        <li>{price}</li>
        <li>{percent_change_24h}</li>
      </ul>
    </>
  );
};

export default DisplayQuote;