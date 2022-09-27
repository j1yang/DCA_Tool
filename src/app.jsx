import{ useEffect, useState } from 'react';
import './app.css';
import Main from './components/main/main';
import ProfitLineItem from './components/profitLineItem/profitLineItem';

function App({profitService}) {
  const [assets, setAssets] = useState([
    {
      id: '1',
      tickerSymbol: 'BTC',
      name: 'Bitcoin',
      averagePrice: 20110,
      shares: 0.01020112,
      input: 215.8761014,
      goal: 0.1,
      apiId: 'BTC-Bitcoin'
    },
    {
      id: '2',
      tickerSymbol: 'XRP',
      name: 'XRP',
      averagePrice: 0.376737,
      shares: 4382.6365,
      input: 897.6285152,
      goal: 5000,
      apiId: 'XRP-XRP'
    },
    {
      id: '3',
      tickerSymbol: 'ADA',
      name: 'Cardano',
      averagePrice: 0.52535,
      shares: 1820.848084,
      input: 956.5820698,
      goal: 2000,
      apiId: 'ADA-Cardano'
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

  const cp = require('coinpaprika-js');

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
        //console.log(updated);
        if(x===3){
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
        if(x===3){
          setQuotes(updatedQuote);
          
        }
      });
    })
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
