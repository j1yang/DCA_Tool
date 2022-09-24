import{ useEffect, useState } from 'react';
import './app.css';
import Main from './components/main/main';

function App({profitService}) {
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

  const [assetRecords, setAssetRecords] = useState([
    {
      id: '1',
      assetId: '1',
      date: Date.now(), 
      price: 21162,
      amount: 215.8761014,
      shares: 0.01020112
    },
    {
      id: '2',
      assetId: '1',
      date: Date.now(), 
      price: 18692.70,
      amount: 141.464131,
      shares: 0.00756788
    },
    {
      id: '3',
      assetId: '2',
      date: Date.now(), 
      price: 0.376737,
      amount: 8970.6285152,
      shares: 4382.6365
    }
  ]);

  const [quotes, setQuotes] = useState([]);
  
  const [profits,setProfits]= useState([]);

  useEffect(() => {
    const cp = require('coinpaprika-js');
    const test = cp.markets('xrp-xrp')
    .then(function(result){
      const price = Object.values(result)[0].quotes.USD.price;
      const profit = profitService.calculate(assets[1], parseFloat(price));
      setProfits(profit);
    });
    
  },[]);

  return (
    <Main 
      assets={assets} 
      profits={profits}
      quotes={quotes} 
      assetRecords={assetRecords}
    />
  );
}

export default App;
