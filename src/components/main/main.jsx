import React, { useState, useEffect } from 'react';
import DisplayProfits from '../displayProfits/displayProfits';
import DisplayQuotes from '../displayQuotes/displayQuotes';
import DisplayRecords from '../displayRecords/displayRecords';
import DisplayTotal from '../displayTotal/displayTotal';
import styles from './main.module.css';
import profitService from '../../services/profit';

const Main = ({assets, quotes, assetRecords}) => {
  const [assetId, setAssetId] = useState(0);

  const findAssetId = (assetId) => {
    setAssetId(assetId);
  };

  const closeTxnHistory = () => {
    setAssetId(0);
  }


  return (
    <>
      <h1>DCA Dashboard</h1>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.total}>
            <DisplayTotal assets={assets} findAssetId={findAssetId}/>
          </div>
          <div className={styles.profit}>
            <DisplayProfits assets={assets} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.market}>
            <DisplayQuotes quotes={quotes}/>
          </div>
          <div className={styles.records}>
            <DisplayRecords records={assetRecords} assetId={assetId} closeTxnHistory={closeTxnHistory}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;