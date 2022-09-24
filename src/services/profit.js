const calculate = (asset, price) =>{
  const currentValue = 3.1 * asset.shares;
  const earning = 
  (asset.input > currentValue) ? 
  (asset.input - currentValue)
  :(currentValue - asset.input);
  const sign = (earning >= 0) ? '+' : '-';
  const percentage = 
  ((currentValue - asset.input) >= 0) 
  ? ((1-asset.input / currentValue) * 100)
  : (-(1-currentValue / asset.input) * 100 );

  const calculation = {
    name: asset.name,
    symbol: asset.tickerSymbol,
    quantity: asset.shares,
    purchasedValue: asset.input,
    currentValue: currentValue,
    sign: sign,
    earning: earning,
    percent: percentage,
    quote: price
  }

  return calculation;
};