import React, { useContext } from 'react';
import styles from './Menu.module.css'
import {Contexto} from '../../Context/context'

const Menu = () => {
    const { variavel } = useContext(Contexto)
    return (
        <div className={styles.menu} style={{width:`${variavel}%`}}>
        </div>
    );
}

export default Menu