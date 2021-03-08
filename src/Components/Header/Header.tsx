import React, { useContext } from 'react';
import styles from './Header.module.css'
import { VscListFlat } from 'react-icons/vsc'
import { IconContext } from "react-icons";
import {Contexto} from '../../Context/context'
const Header = () => {
const { taggleMenu } = useContext(Contexto)

    const taggle = () =>{
        taggleMenu()
    }

    return (
        <div className={styles.container}>
                <VscListFlat style={{cursor: 'pointer'}} color="#FFF" size={40}  onClick={()=>taggle()}/>
        </div>
    );
}

export default Header