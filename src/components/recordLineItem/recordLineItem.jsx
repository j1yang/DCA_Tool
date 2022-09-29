import React from 'react';
import styles from './recordLineitem.module.css';
const RecordLineItem = ({filtered}) => {
  const {id, assetId, date, price, amount, shares} = filtered;

  return(
    <div className={styles.line} >
      <li className={styles.date}>{date}</li>
      <li className={styles.price}>${price.toFixed(4)}</li>
      <li className={styles.amount}>${amount.toFixed(2)}</li>
      <li className={styles.shares}>{shares.toFixed(4)}</li>
    </div>
  );
};

export default RecordLineItem;