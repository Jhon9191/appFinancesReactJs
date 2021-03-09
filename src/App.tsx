import React, { useEffect, useState } from 'react';
import api from './services/api';

import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import Button from './Components/Button/Button'

import styles from './styles/index.module.css'


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
    <div style={{
      display: 'flex',
      flexDirection: "column",
      height: '100%',
      width: '100%',
      flex: 1
    }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: "row", height: '100vh', width: '100%', }}>
        <Menu />
        <div style={{display: 'flex', backgroundColor: "#000", flexDirection: "column", height: '100%', width: '100%'}}>
           
        <Button/>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
