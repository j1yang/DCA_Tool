import React from 'react';

const RecordLineItem = ({filtered}) => {
  const {id, assetId, date, price, amount, shares} = filtered;

  return(
    <ul>
      <li>{date}</li>
      <li>{price}</li>
      <li>{amount}</li>
      <li>{shares}</li>
    </ul>
  );
};

export default RecordLineItem;