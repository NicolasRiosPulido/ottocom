import styles from '../../styles/General.module.css';

const Btn = (props) => {

    const { Title = 'Boton' } = props

    return (
        <div className={styles.btnContainer}>
            <p>{Title}</p>
        </div>
    )
}

export default Btn
