import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  
  useEffect(() => {
   async function teste(){
    await api.get("billingCycles").then((response)=>{
       console.log(response.data);
     }).catch((err)=>{
       console.log(`err : ${err}`)
     })
   }
   teste();
  }, []);

  return (

    <div className="App">
      <h1>oi</h1>
    </div>

  );
}

export default App;
