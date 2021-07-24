import styles from '../../styles/Home.module.css';
import { CheckmarkCircleOutline, CloseCircleOutline } from 'react-ionicons';

const BENEFICIOS_BASICO = [
    {
        value: 'Registro de transacciones',
        valid: true
    },
    {
        value: 'Clasificacion de transacciones por cateoria',
        valid: true
    },
    {
        value: 'Metas de ahorro y deuda',
        valid: true
    },
    {
        value: 'Consejos para mejorar tu salud financiera',
        valid: true
    },
    {
        value: 'Conexion automatica a cuentas bancarias',
        valid: false
    },
    {
        value: 'Categorizacion inteligente de transacciones',
        valid: false
    },
]
const BENEFICIOS_PREMIUN = [
    'Registro de transacciones',
    'Clasificacion de transacciones por cateoria',
    'Metas de ahorro y deuda',
    'Consejos para mejorar tu salud financiera',
    'Conexion automatica a cuentas bancarias',
    'Categorizacion inteligente de transacciones'
]

const Subscripciones = () => {
    return (
        <>
            <p className={styles.main_Title}>Pruébalo sin costo</p>
            <p className={styles.desc_title}>
                Descarga el app crea tus presupuestos, cumple tus metas y más, por tres meses sin costo ni cargos a tu tarjeta
            </p>
            <div className={`row_center ${styles.Subscripciones}`}>
                <div className={styles.planBasico}>
                    <p className={styles.genera_title}>Plan Basico</p>
                    <p className={styles.currency}>Gratis</p>
                    {BENEFICIOS_BASICO.map((item) => (
                        <div className={`row_line_r ${styles.benefitLine}`}>
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
                    <p className={styles.currency}>Próximamente</p>
                    <div className={styles.benefistContainer}>
                        {BENEFICIOS_PREMIUN.map((item) => (
                            <div className={`row_line_r ${styles.benefitLine}`}>
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
            </div>
        </>
    )
}

export default Subscripciones
