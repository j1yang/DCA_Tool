import React from 'react';
import styles from './displayQuote.module.css';
const DisplayQuote = ({coin}) => {
  const {name , symbol , price, priceChange} = coin;
  const colour = priceChange >= 0 ? styles.green : styles.red;
  const sign = priceChange >= 0 ? '+' : '';
  return(
    <div className={styles.line}>
      <li className={styles.name}>{name}</li>
      <li className={styles.symbol}>{symbol}</li>
      <li className={styles.price}>${price}</li>
      <li className={`${styles.priceChange} ${colour}`}>{sign}{priceChange}%</li>
    </div>
  );
};

export default DisplayQuote;