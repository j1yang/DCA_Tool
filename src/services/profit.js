class ProfitService{

  calculate = (asset, price) =>{
    const currentValue = price * asset.shares;
    const earning = 
    (asset.input < currentValue) ? 
    (currentValue - asset.input):(currentValue - asset.input);
    const sign = (earning >= 0) ? '+' : '-';
    const percentage = 
    ((currentValue - asset.input) >= 0) 
    ? ((currentValue / asset.input) * 100-100)
    : ((1-currentValue / asset.input) * 100 );

    const calculation = {
      name: asset.name,
      symbol: asset.tickerSymbol,
      quantity: asset.shares.toFixed(4),
      purchasedValue: asset.input.toFixed(2),
      currentValue: currentValue.toFixed(2),
      sign: sign,
      earning: Math.abs(earning.toFixed(2)),
      percent: percentage.toFixed(2),
      quote: price.toFixed(8)
    }

    return calculation;
  };
}

export default ProfitService;