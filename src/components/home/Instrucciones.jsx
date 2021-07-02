import { CashOutline } from 'react-ionicons';

import styles from '../../styles/Home.module.css';

import Btn from '../general/Btn';

const Instrucciones = () => {
    return (
        <div className={styles.Instrucciones}>
            <div className={`secction_body row_center`}>
                <div>
                    <div className={styles.InstruccionesCard}>
                        <div className={styles.iconContainer}>
                            <CashOutline
                                color={'#FFF'}
                                height="40px"
                                width="40px"
                            />
                        </div>
                        <p >Transacciones</p>
                        <p>En el registro de transacciones encuentras los movimientos de todas tus cuentas en un solo lugar.</p>
                    </div>
                    <div className={styles.InstruccionesCard}>
                        <CashOutline
                            color={'#00000'}
                            height="60px"
                            width="60px"
                        />
                        <p >Balance consolidado</p>
                        <p>Balance de ingresos y gastos en teimpo real.</p>
                    </div>
                </div>
                <div>
                    cell phone
                </div>
                <div>
                    linea 2
                </div>
            </div>
            <div className={`secction_body row_center`}>
                <Btn />
            </div>
        </div>
    )
}

export default Instrucciones
