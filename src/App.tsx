import React, { useEffect, useState } from 'react';
import api from './services/api';
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
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
    <div className={styles.container}>
      <Menu/>
      <div style={{width: '100%', flexDirection: "column"}}> 
        <Header/>
      </div>
    </div>
  );
}

export default App;
