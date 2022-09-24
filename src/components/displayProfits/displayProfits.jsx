import React from 'react';

const DisplayProfits = (props) => {
  return (
    <>
    <ul>
      <li>Asset: Ripple</li>
      <li>Symbol: XRP</li>
      <li>Quantity: 150,000XRP</li>
      <li>Purchased Value: $100,000</li>
      <li>Current Value: $230,000</li>
      <li>Earning: $130,000</li>
      <li>%: +43%</li>
    </ul>
    </>
  );
};

export default DisplayProfits;