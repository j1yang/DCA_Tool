import React from 'react';

const AssetLineItem = ({asset}) => {
  const {id, tickerSymbol, name, averagePrice, shares,input, goal} = asset;

  return (
    <p>{tickerSymbol} | {name} | {averagePrice} | {shares} | {input} | {goal}</p>
  );
};

export default AssetLineItem;