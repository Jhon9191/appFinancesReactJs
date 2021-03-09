import styles from '../Button/Button.module.css'

const Button = () =>{
    return(
        <div className={styles.container}>
        <button className={styles.botao1}></button>
        <button className={styles.botao1}></button>
        <button className={styles.botao1}></button>
        </div>
    );
}

export default Button;