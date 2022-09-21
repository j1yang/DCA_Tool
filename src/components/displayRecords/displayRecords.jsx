import React from 'react';

const DisplayRecords = ({filtered}) =>{
  {
    if(filtered === null){
      return;
    }

    filtered.map(item =>(
      console.log(item)
    ));
  }
  return(
    <h1>this is records</h1>
  );
};

export default DisplayRecords;