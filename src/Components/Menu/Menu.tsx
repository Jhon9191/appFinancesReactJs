import React, { useContext } from 'react';
import styles from './Menu.module.css'
import { Contexto } from '../../Context/context'
import { VscDashboard } from 'react-icons/vsc'
import { AiFillDollarCircle } from "react-icons/ai";

const Menu = () => {
    const { variavel } = useContext(Contexto)
    return (
        <div className={styles.menu} style={{ width: `${variavel}%` }}>
            <div className={styles.menuItem}>
                    <VscDashboard color="#FFF" size={30} />
                    <small>Dashboard</small>
            </div>
            <div className={styles.menuItem}>
                    <AiFillDollarCircle color="#FFF" size={30} />
                    <small>BillyngCycles</small>
            </div>
        </div>

    );
}

export default Menu