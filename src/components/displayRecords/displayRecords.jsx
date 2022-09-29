import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import RecordLineItem from '../recordLineItem/recordLineItem';
import styles from './displayRecords.module.css';

const DisplayRecords = ({records, assetId, closeTxnHistory}) =>{
  const [filtered, setFiltered] = useState(null);

  useEffect(()=>{
    const filteredTxns = records.filter(record => record.assetId === assetId);
    setFiltered(filteredTxns);
  },[assetId]);

  if(assetId === 0){
    return;
  }
  return(
    <section className={styles.records}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Transaction History</h1>
        <div className={styles.btnClose} onClick={closeTxnHistory}>
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
      <ul>
        <div className={styles.category}>
          <li className={styles.date}>Date</li>
          <li className={styles.price}>Price</li>
          <li className={styles.amount}>Amount</li>
          <li className={styles.shares}>Shares</li>
        </div>
        {filtered.map(item => (
          <RecordLineItem filtered={item} />
        ))}
      </ul>
    </section>
  );
};

export default DisplayRecords;