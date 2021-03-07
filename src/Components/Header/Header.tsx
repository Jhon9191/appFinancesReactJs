import React from 'react';
import styles from './Header.module.css'
import { VscListFlat } from 'react-icons/vsc'
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <div className={styles.container}>
                <VscListFlat color="#FFF" size={40} />
        </div>
    );
}

export default Header