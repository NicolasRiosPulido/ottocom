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
                    <p className={styles.CFcardDesc}>Manten un registro centralizado de transacciones clasificadas en categorias de manera manual o automatica. </p>
                </div>
                <div className={styles.ComoFuncionaCard}>
                    <Image
                        src={'/images/home/CFIlustrationB.png'}
                        alt="Iluestarcion A"
                        width={191}
                        height={137}
                        className={styles.ComoFuncionaImg}
                    />
                    <p className={styles.CFcardTitle}>Presupuesto consolidado</p>
                    <p className={styles.CFcardDesc}>Manten un registro centralizado de transacciones clasificadas en categorias de manera manual o automatica. </p>
                </div>
                <div className={styles.ComoFuncionaCard}>
                    <Image
                        src={'/images/home/CFIlustrationC.png'}
                        alt="Iluestarcion A"
                        width={191}
                        height={137}
                        className={styles.ComoFuncionaImg}
                    />
                    <p className={styles.CFcardTitle}>Reporte de metas de ahorro y deuda </p>
                    <p className={styles.CFcardDesc}>Manten un registro centralizado de transacciones clasificadas en categorias de manera manual o automatica. </p>
                </div>
            </div>
        </div>
    )
}

export default ComoFunciona
