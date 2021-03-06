import React, { useEffect, useState } from 'react';
import api from './services/api';
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'

function App() {
  useEffect(() => {
    async function teste() {
      await api.get("billingCycles").then((response) => {
        console.log(response.data);
      }).catch((err) => {
        console.log(`err : ${err}`)
      })
    }
    teste();
  }, []);

  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
