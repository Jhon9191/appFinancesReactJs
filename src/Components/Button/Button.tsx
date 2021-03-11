import styles from '../Button/Button.module.css'

const Button = () =>{
    return(
        <div className={styles.container}>
        <button className={styles.botao1}>
        <div>
           <h2>R$ 10,00</h2>
           <small>Total crédito</small>
        </div>
        </button>
        <button className={styles.botao2}>
        <div>
           <h2>R$ 10,00</h2>
           <small>Total débitos</small>
        </div>
        </button>
        <button className={styles.botao3}>
        <div>
           <h2>R$ 20,00</h2>
           <small>Valores calculados</small>
        </div>
        </button>
        </div>
    );
}

export default Button;