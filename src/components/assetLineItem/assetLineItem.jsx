import React from 'react';
import styles from './assetLineItem.module.css';

const AssetLineItem = ({asset, findAssetId}) => {
  const {id, tickerSymbol, name, averagePrice, shares,input, goal} = asset;
  const onClick = () => {
    findAssetId(id);
  };
  return (
    <div className={styles.line} onClick={onClick}>
      <li className={styles.ticker}>{tickerSymbol}</li>
      <li className={styles.name}>{name}</li>
      {/* <li className={styles.quantity}>{quantity}{symbol}</li> */}
      <li className={styles.avgPrice}>{averagePrice.toFixed(4)}</li>
      <li className={styles.shares}>{shares.toFixed(2)}</li>
      <li className={styles.input}>{input.toFixed(2)}</li>
      <li className={styles.goal}>{goal.toFixed(2)}</li>
    </div>
  );
};

export default AssetLineItem;