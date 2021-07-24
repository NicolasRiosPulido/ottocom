import styles from '../../styles/General.module.css';

const Btn = (props) => {

    const { Title = 'Boton', onClick } = props

    return (
        <div className={styles.btnContainer} onClick={onClick}>
            <p>{Title}</p>
        </div>
    )
}

export default Btn
