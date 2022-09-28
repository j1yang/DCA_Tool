import React from 'react';

const RecordLineItem = ({filtered}) => {
  const {id, assetId, date, price, amount, shares} = filtered;

  
  return(
    <div>
      <li>{date}</li>
      <li>{price}</li>
      <li>{amount}</li>
      <li>{shares}</li>
    </div>
  );
};

export default RecordLineItem;