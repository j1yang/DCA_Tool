import React from 'react';
import styles from './assetLineItem.module.css';

const AssetLineItem = ({asset}) => {
  const {id, tickerSymbol, name, averagePrice, shares,input, goal} = asset;

  return (
    <tr className={styles.row}>
      <td className={styles.tickerSymbol}>{tickerSymbol}</td>
      <td className={styles.name}>{name}</td>
      <td className={styles.averagePrice}>{averagePrice}</td>
      <td className={styles.shares}>{shares}</td>
      <td className={styles.input}>{input}</td>
      <td className={styles.goal}>{goal}</td>
    </tr>
  );
};

export default AssetLineItem;