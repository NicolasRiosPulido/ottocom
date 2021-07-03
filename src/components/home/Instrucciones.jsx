import Image from 'next/image';
import { PieChartOutline } from 'react-ionicons';
import styles from '../../styles/Home.module.css';

import Btn from '../general/Btn';

const Instrucciones = () => {
    return (
        <div className={styles.Instrucciones}>
            <div className={`secction_body row_center`}>
                <div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <PieChartOutline
                                color={'#FFF'}
                                height="40px"
                                width="40px"
                            />
                        </div>
                        <p >Transacciones</p>
                        <p>En el registro de transacciones encuentras los movimientos de todas tus cuentas en un solo lugar.</p>
                    </div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <PieChartOutline
                                color={'#FFF'}
                                height="40px"
                                width="40px"
                            />
                        </div>
                        <p >Balance consolidado</p>
                        <p>Balance de ingresos y gastos en teimpo real.</p>
                    </div>
                </div>
                <div className={styles.instructionPhine}>
                    <Image
                        src={'/images/home/iPhone_X.png'}
                        alt="iphon descripcion"
                        width={310}
                        height={580}
                    />
                </div>
                <div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <PieChartOutline
                                color={'#FFF'}
                                height="40px"
                                width="40px"
                            />
                        </div>
                        <p >Transacciones</p>
                        <p>En el registro de transacciones encuentras los movimientos de todas tus cuentas en un solo lugar.</p>
                    </div>
                    <div className={styles.InstruccionesCard}>
                        <div className={`c_t ${styles.iconContainer}`}>
                            <PieChartOutline
                                color={'#FFF'}
                                height="40px"
                                width="40px"
                            />
                        </div>
                        <p >Balance consolidado</p>
                        <p>Balance de ingresos y gastos en teimpo real.</p>
                    </div>
                </div>
            </div>
            <div className={`secction_body row_center`}>
                <Btn />
            </div>
        </div>
    )
}

export default Instrucciones
