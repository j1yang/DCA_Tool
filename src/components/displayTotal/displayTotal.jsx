import React from 'react';
import AssetLineItem from '../assetLineItem/assetLineItem';
import styles from './displayTotal.module.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const DisplayTotal = ({assets}) => {
  return (
    <section className={styles.DisplayTotal}>
      <h1 className={styles.title}>Assets</h1>
      <div className={styles.table_container}>
        <Table className={styles.table}  bordered hover size="sm">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Avg Price</th>
              <th>Shares</th>
              <th>Input</th>
              <th>Goal</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <AssetLineItem asset={asset}/>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default DisplayTotal;