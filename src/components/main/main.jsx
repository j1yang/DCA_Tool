import React, { useState, useEffect } from 'react';
import DisplayTotal from '../displayTotal/displayTotal';
import DisplayProfits from '../displayProfits/displayProfits';
import DisplayQuotes from '../displayQuotes/displayQuotes';
import DisplayRecords from '../displayRecords/displayRecords';
import styles from './main.module.css';
import Header from '../header/header';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';


const Main = ({authService, dataService, profitService}) => {
  const location = useLocation();
  const uid = location.state.userId;
  
  const [assetId, setAssetId] = useState(0);

  const navigate = useNavigate();

  const [assets, setAssets] = useState([]);
  const [assetRecords, setAssetRecords] = useState([]);

  const [quotes, setQuotes] = useState([]);
  const [profits,setProfits]= useState([]);

  const cp = require('coinpaprika-js');
  
  //componentDidMount
  useEffect(()=> {
    authService.onAuthChange(user => {
      if(!user){
        navigate('/',{replace: true});
      }
    });

    //read data and store
    dataService.readData(uid, 'assets').then(result=>{
      setAssets(result.assetList);
      setAssetRecords(result.assetRecords);
    });
  }, []);

  //update profit & quote when asset is changed
  useEffect(() => {
    let updatedProfit = [];
    let updatedQuote =[];
    let x = 0 ;
    assets.map((asset)=>{
      cp.ticker(asset.apiId, { quotes: "USD" })
      .then(results => {
        const price = Object.values(results)[4];
        return profitService.calculate(asset, parseFloat(price));
      })
      .then(profit => {
        updatedProfit = [...updatedProfit, profit];
        x++;
        if(x===assets.length){
          setProfits(updatedProfit);
        }
      });

      cp.ticker(asset.apiId, { quotes: "USD" })
      .then(results => {
        const priceChange = Object.values(results)[12];
        const price = Object.values(results)[4];
        return profitService.getQuote(asset, parseFloat(price), parseFloat(priceChange));
      }).then(quote => {
        updatedQuote = [...updatedQuote, quote];
        if(x===assets.length){
          setQuotes(updatedQuote);
        }
      });
    });
  }, [assets]);

  //Quote and Record Component Rendering Handle
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

  const findAssetId = (assetId) => {
    setAssetId(assetId);
  };

  const closeTxnHistory = () => {
    setAssetId(0);
    getComponentName('quote');
  }

  //Logout
  const onLogout = () => {
    authService.logout();
  };

  return (
    <div className={styles.container}>
      <Header onLogout={onLogout}/>
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
      <Footer/>
    </div>
  );
}

export default Main;