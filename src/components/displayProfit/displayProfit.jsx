import React from 'react';

const DisplayProfit = ({profit}) => {
  const {name, symbol, quantity, purchasedValue,
     currentValue,sign, earning,percent, quote} = profit;
  return(
    <>
      {/* <li>Asset: {name}</li>
      <li>Symbol: {symbol}</li>
      <li>Quantity: {quantity}{symbol}</li>
      <li>Purchased Value: ${purchasedValue}</li>
      <li>Current Value: ${currentValue}</li>
      <li>Earning: {sign}${earning}</li>
      <li>%: {sign}{percent}%</li> */}
      <h1>hi</h1>
    </>
  );
};

export default DisplayProfit;