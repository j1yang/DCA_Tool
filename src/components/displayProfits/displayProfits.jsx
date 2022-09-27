import React from 'react';
import ProfitLineItem from '../profitLineItem/profitLineItem';
const DisplayProfits = ({profits}) => {
  return (
    <section>
      <ul>
        {profits.map((profit)=>(
          <ProfitLineItem profit={profit}/>
        ))}
      </ul>
    </section>
  );
};

export default DisplayProfits;



