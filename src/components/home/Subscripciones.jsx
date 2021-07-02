import styles from '../../styles/Home.module.css';
import { CheckmarkCircleOutline } from 'react-ionicons';

const BENEFICIOS_BASICO = [
    { value: 'Beneficio 1', valid: true },
    { value: 'Beneficio 2', valid: true },
    { value: 'Beneficio 3', valid: false },
    { value: 'Beneficio 4', valid: false },
    { value: 'Beneficio 5', valid: false },
]
const BENEFICIOS_PREMIUN = [
    'Beneficio 1',
    'Beneficio 2',
    'Beneficio 3',
    'Beneficio 4',
    'Beneficio 5'
]

const Subscripciones = () => {
    return (
        <>
            <p className={styles.main_Title}>¿Como funciona?</p>
            <p className={styles.desc_title}>Escoge el plan que se acomode a tus necesidades.</p>
            <div className={`row_center ${styles.Subscripciones}`}>
                <div className={styles.planBasico}>
                    <p>Plan Basico</p>
                    <p>$0</p>
                    <CheckmarkCircleOutline
                        color={'#58CB98'}
                        height="28px"
                        width="28px"
                    />
                </div>
                <div className={styles.planPremium}>
                    <p>Plan Premium</p>
                    <p>$9</p>
                </div>
            </div>
        </>
    )
}

export default Subscripciones
