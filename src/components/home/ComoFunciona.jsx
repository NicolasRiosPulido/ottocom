import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const ComoFunciona = () => {
    return (
        <div className={`secction_body ${styles.ComoFunciona}`}>
            <p className={styles.main_Title}>¿Como funciona?</p>
            <div className="row">
                <div className={styles.ComoFuncionaCard}>
                    <Image
                        src={'/images/home/CFIlustrationA.png'}
                        alt="Iluestarcion A"
                        width={191}
                        height={137}
                        className={styles.ComoFuncionaImg}
                    />
                    <p className={styles.CFcardTitle}>Monitoreo de gastos</p>
                    <p className={styles.CFcardDesc}>
                        Registra de forma centralizada tus transacciones por categorias de manera manual o automatica.
                    </p>
                </div>
                <div className={styles.ComoFuncionaCard}>
                    <Image
                        src={'/images/home/CFIlustrationB.png'}
                        alt="Iluestarcion A"
                        width={191}
                        height={137}
                        className={styles.ComoFuncionaImg}
                    />
                    <p className={styles.CFcardTitle}>Controla tu presupuesto</p>
                    <p className={styles.CFcardDesc}>
                        Accede a el estado de tu prespuesto en tiempo real y revisa el consolidado de tus gastos e ingresos mensuales
                         </p>
                </div>
                <div className={styles.ComoFuncionaCard}>
                    <Image
                        src={'/images/home/CFIlustrationC.png'}
                        alt="Iluestarcion A"
                        width={191}
                        height={137}
                        className={styles.ComoFuncionaImg}
                    />
                    <p className={styles.CFcardTitle}>Cumple tus metas </p>
                    <p className={styles.CFcardDesc}>
                        Evalua tu desempeno financiero con respecto a tus metas de ahorro y el pago de tus deuda
                    </p>
                </div>
                <div className={styles.ComoFuncionaCard}>
                    <Image
                        src={'/images/home/CFIlustrationC.png'}
                        alt="Iluestarcion A"
                        width={191}
                        height={137}
                        className={styles.ComoFuncionaImg}
                    />
                    <p className={styles.CFcardTitle}>Mejora tu salud financiera </p>
                    <p className={styles.CFcardDesc}>
                        Recibe asesoria que te permita disfurtar del presente y vivir tranquilo sobre tu futuro financiero
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ComoFunciona
