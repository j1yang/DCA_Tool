import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import RecordLineItem from '../recordLineItem/recordLineItem';

const DisplayRecords = ({records, assetId}) =>{
  const [filtered, setFiltered] = useState(null);

  useEffect(()=>{
    const filteredTxns = records.filter(record => record.assetId === assetId);
    setFiltered(filteredTxns);
  },[assetId]);

  if(assetId === 0){
    return;
  }

  
  return(
    <section>
      <h1>Transaction History {assetId}</h1>
      
      {filtered.map(item => (
        <RecordLineItem filtered={item}/>
      ))}
    </section>
  );
};

export default DisplayRecords;