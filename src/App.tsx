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
    <div className={styles.container}>
      <Header />
      <div className={styles.subContainer}>
        <Menu />
        <div className={styles.main}>
           
        <Button/>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
