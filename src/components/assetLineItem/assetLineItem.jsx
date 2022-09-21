import React from 'react';
import styles from './assetLineItem.module.css';

const AssetLineItem = ({asset, findRecordId}) => {
  const {id, tickerSymbol, name, averagePrice, shares,input, goal} = asset;
  const onClick = (e) => {
    findRecordId(id);
  }
  return (
    <tr className={styles.row} onClick={onClick}>
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