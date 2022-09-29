import React, { useState } from 'react';
import DisplayTotal from '../displayTotal/displayTotal';
import DisplayProfits from '../displayProfits/displayProfits';
import DisplayQuotes from '../displayQuotes/displayQuotes';
import DisplayRecords from '../displayRecords/displayRecords';
import styles from './main.module.css';


const Main = ({assets, quotes, profits, assetRecords}) => {
  const [assetId, setAssetId] = useState(0);

  const findAssetId = (assetId) => {
    setAssetId(assetId);
  };

  const closeTxnHistory = () => {
    setAssetId(0);
    getComponentName('quote');
  }

  const renderSwitch = (componentName)=>{
    switch(componentName) {
      case 'quote':
        return <div className={styles.market}>
        <DisplayQuotes 
          quotes={quotes}
        />
      </div>;
      default:
        return null;
    }
  }

  const [componentName,setComponentName] = useState('quote');

  const getComponentName = (componentName) => {
    const component = (componentName === null) ? 'quote' : componentName;
    setComponentName(component);
  };

  return (
    <>
      <h1>
      💰 Dollar Cost Averaging Time! 🤑
      </h1>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.total}>
            <DisplayTotal 
              assets={assets} 
              findAssetId={findAssetId} 
              componentName={getComponentName}
            />
          </div>
          <div className={styles.profit}>
            <DisplayProfits profits={profits}/>
          </div>
        </div>
        <div className={styles.right}>
          {
            renderSwitch(componentName)
          }
          
          <div className={styles.records}>
            <DisplayRecords 
              records={assetRecords} 
              assetId={assetId} 
              closeTxnHistory={closeTxnHistory}
              componentName={getComponentName}
            />
          </div>
        </div>
      </div>
      <p className={styles.footer}>
        Copyright ©️ 2022 JaewonYang All Rights Reserved
      </p>
    </>
  );
}

export default Main;