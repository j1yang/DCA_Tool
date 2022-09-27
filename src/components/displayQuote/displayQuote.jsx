import React from 'react';

const DisplayQuote = ({coin}) => {
  const {name , symbol , price, priceChange} = coin;

  
  return(
    <>
      <ul>
        <li>{name}</li>
        <li>{symbol}</li>
        <li>{price}</li>
        <li>{priceChange}</li>
      </ul>
    </>
  );
};

export default DisplayQuote;