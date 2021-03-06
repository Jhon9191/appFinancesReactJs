import React from 'react';
import styles from './Header.module.css'
import { VscListFlat } from 'react-icons/vsc'
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <VscListFlat color="#FFF" size="70%"  />
                </div>
            </div>
        </div>
    );
}

export default Header