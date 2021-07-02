import styles from '../../styles/Home.module.css';
import { CheckmarkCircleOutline, CloseCircleOutline } from 'react-ionicons';

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
                    <p className={styles.genera_title}>Plan Basico</p>
                    <p className={styles.currency}>$0</p>
                    {BENEFICIOS_BASICO.map((item) => (
                        <div className={`row_line ${styles.benefitLine}`}>
                            {item.valid ?
                                <CheckmarkCircleOutline
                                    color={'#58CB98'}
                                    height="28px"
                                    width="28px"
                                /> :
                                <CloseCircleOutline
                                    color={'#FB6969'}
                                    height="28px"
                                    width="28px"
                                />
                            }
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.planPremium}>
                    <p className={styles.genera_title}>Plan Premium</p>
                    <p className={styles.currency}>$9</p>
                    {BENEFICIOS_PREMIUN.map((item) => (
                        <div className={`row_line ${styles.benefitLine}`}>
                            <CheckmarkCircleOutline
                                color={'#58CB98'}
                                height="28px"
                                width="28px"
                            />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Subscripciones
