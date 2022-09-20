import React from 'react';
import styles from './main.module.css';

const Main = (props) => {
  return (
    <>
      <h1>DCA Dashboard</h1>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.total}>
            this is total table
          </div>
          <div className={styles.profit}>
            this is profit table
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.market}>
            this is market price table
          </div>
          <div className={styles.records}>
            this is detail trade history
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;