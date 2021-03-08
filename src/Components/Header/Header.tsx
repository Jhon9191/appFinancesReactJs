import React, { useContext } from 'react';
import styles from './Header.module.css'
import { VscListFlat } from 'react-icons/vsc'
import { IconContext } from "react-icons";
const Header = () => {


    return (
        <div className={styles.container}>
                <VscListFlat style={{cursor: 'pointer'}} color="#FFF" size={40} />
        </div>
    );
}

export default Header