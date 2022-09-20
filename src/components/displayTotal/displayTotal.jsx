import React from 'react';
import AssetLineItem from '../assetLineItem/assetLineItem';

const DisplayTotal = ({assets}) => {
  return (
    <section>
      <h1>Assets</h1>
      {assets.map(asset => (
        <AssetLineItem asset={asset}/>
      ))}
    </section>
  );
}

export default DisplayTotal;