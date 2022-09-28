import React from 'react';
import ProfitLineItem from '../profitLineItem/profitLineItem';
import styles from './displayProfits.module.css';
const DisplayProfits = ({profits}) => {
  return (
    <section className={styles.profits}>
      <h2 className={styles.title}>Calculation</h2>
      <ul>
        <div className={styles.category}>
          <li className={styles.name}>Name</li>
          <li className={styles.symbol}>Symbol </li>
          {/* <li className={styles.quantity}>Quantity</li> */}
          <li className={styles.purchased}>Purchased Value</li>
          <li className={styles.current}>Current Value</li>
          <li className={styles.earning}>Earning</li>
          <li className={styles.percentage}>%</li>
        </div>
        {profits.map((profit)=>(
          <ProfitLineItem profit={profit}/>
        ))}
      </ul>
    </section>
  );
};

export default DisplayProfits;



