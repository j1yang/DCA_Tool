import React, { useState } from 'react';
import DisplayTotal from '../displayTotal/displayTotal';
import styles from './main.module.css';

const Main = (props) => {
  const [assets, setAssets] = useState([
    {
      id: '1',
      tickerSymbol: 'BTC',
      name: 'Bitcoin',
      averagePrice: 20110,
      shares: 0.01020112,
      input: 215.8761014,
      goal: 0.1
    },
    {
      id: '2',
      tickerSymbol: 'XRP',
      name: 'Ripple',
      averagePrice: 0.376737,
      shares: 4382.6365,
      input: 897.6285152,
      goal: 5000
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000
    }
  ]);
  return (
    <>
      <h1>DCA Dashboard</h1>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.total}>
            <DisplayTotal assets ={assets}/>
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