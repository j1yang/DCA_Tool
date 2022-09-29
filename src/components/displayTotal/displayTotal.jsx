import React from 'react';
import AssetLineItem from '../assetLineItem/assetLineItem';
import styles from './displayTotal.module.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const DisplayTotal = ({assets, findAssetId,componentName}) => {
  return (
    <section className={styles.DisplayTotal}>
      <h1 className={styles.title}>Assets</h1>
      <ul className={styles.assets}>
        <div className={styles.category}>
          <li className={styles.ticker}>Ticker</li>
          <li className={styles.name}>Name</li>
          <li className={styles.avgPrice}>Avg Price</li>
          {/* <li className={styles.quantity}>Quantity</li> */}
          <li className={styles.shares}>Shares</li>
          <li className={styles.input}>Input</li>
          <li className={styles.goal}>Goal</li>
        </div>
        {assets.map(asset => (
              <AssetLineItem asset={asset} findAssetId={findAssetId} getComponentName={componentName}/>
        ))}
      </ul>
    </section>
  );
}

export default DisplayTotal;