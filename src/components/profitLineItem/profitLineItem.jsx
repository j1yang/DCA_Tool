import React from 'react';
import styles from './profitLineItem.module.css';
const ProfitLineItem = ({profit}) => {
  const {name, symbol, quantity, purchasedValue,
    currentValue,sign, earning,percent, quote} = profit;
    const colour = sign === '+' ? styles.green : styles.red;

  return(
    <div className={styles.line}>
      <li className={styles.name}>{name}</li>
      <li className={styles.symbol}>{symbol}</li>
      {/* <li className={styles.quantity}>{quantity}{symbol}</li> */}
      <li className={styles.purchased}>${purchasedValue}</li>
      <li className={styles.current}>${currentValue}</li>
      <li className={`${styles.earning} ${colour}`}>{sign}${earning}</li>
      <li className={`${styles.percentage} ${colour}`}>{sign}{percent}%</li>
    </div>
  );
};

export default ProfitLineItem;