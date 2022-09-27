import React from 'react';

const ProfitLineItem = ({profit}) => {
  const {name, symbol, quantity, purchasedValue,
    currentValue,sign, earning,percent, quote} = profit;
  {console.log(profit)}
  return(
    <>
      <li>Symbol: {symbol}</li>
      <li>Quantity: {quantity}{symbol}</li>
      <li>Purchased Value: ${purchasedValue}</li>
      <li>Current Value: ${currentValue}</li>
      <li>Earning: {sign}${earning}</li>
      <li>%: {sign}{percent}%</li>
    </>
  );
};

export default ProfitLineItem;