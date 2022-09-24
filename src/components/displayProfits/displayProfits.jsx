import React from 'react';

const DisplayProfits = ({profits}) => {
  const {name, symbol, quantity, purchasedValue,
     currentValue,sign, earning,percent, quote} = profits;
  return (
    <>
    <ul>
      <li>Asset: {name}</li>
      <li>Symbol: {symbol}</li>
      <li>Quantity: {quantity}{symbol}</li>
      <li>Purchased Value: ${purchasedValue}</li>
      <li>Current Value: ${currentValue}</li>
      <li>Earning: {sign}${earning}</li>
      <li>%: {sign}{percent}%</li>
    </ul>
    </>
  );
};

export default DisplayProfits;