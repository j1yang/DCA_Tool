import React from 'react';
import DisplayProfit from '../displayProfit/displayProfit';

const DisplayProfits = ({profits}) => {
  
  return (
    <ul>
      
      {profits.map((profit)=>{
        {console.log(profit)}
        <DisplayProfit profit={profit} />
      })}
    </ul>
  );
};

export default DisplayProfits;