import styles from '../../styles/General.module.css';

const Btn = (props) => {

    const { Title = 'Boton', onClick, cargando = false } = props

    return (
        <div className={styles.btnContainer} onClick={!cargando ? onClick : () => { }}>
            {cargando ? <p>cargando</p> : <p>{Title}</p>}
        </div>
    )
}

export default Btn
