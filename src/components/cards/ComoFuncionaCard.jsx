import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export const ComoFuncionaCardA = () => {
    return (
        <div className={styles.ComoFuncionaCard}>
            <img
                src={'https://avatars.otto-app.com/dotcom/home/CFIlustrationA.png'}
                alt="Iluestarcion A"
                className={styles.ComoFuncionaImg}
            />
            <p className={styles.CFcardTitle}>Monitoreo de gastos</p>
            <p className={styles.CFcardDesc}>
                Registra de forma centralizada tus transacciones por categorias de manera manual o automatica.
            </p>
        </div>
    )
}

export const ComoFuncionaCardB = () => {
    return (
        <div className={styles.ComoFuncionaCard}>
            <img
                src={'https://avatars.otto-app.com/dotcom/home/CFIlustrationB.png'}
                alt="Iluestarcion A"
                className={styles.ComoFuncionaImg}
            />
            <p className={styles.CFcardTitle}>Controla tu presupuesto</p>
            <p className={styles.CFcardDesc}>
                Accede a el estado de tu prespuesto en tiempo real y revisa el consolidado de tus gastos e ingresos mensuales
            </p>
        </div>
    )
}

export const ComoFuncionaCardC = () => {
    return (
        <div className={styles.ComoFuncionaCard}>
            <img
                src={'https://avatars.otto-app.com/dotcom/home/CFIlustrationC.png'}
                alt="Iluestarcion A"
                className={styles.ComoFuncionaImg}
            />
            <p className={styles.CFcardTitle}>Cumple tus metas </p>
            <p className={styles.CFcardDesc}>
                Evalua tu desempeno financiero con respecto a tus metas de ahorro y el pago de tus deuda
        </p>
        </div>
    )
}

export const ComoFuncionaCardD = () => {
    return (
        <div className={styles.ComoFuncionaCard}>
            <img
                src={'https://avatars.otto-app.com/dotcom/home/CFIlustrationA.png'}
                alt="Iluestarcion A"
                className={styles.ComoFuncionaImg}
            />
            <p className={styles.CFcardTitle}>Mejora tu salud financiera </p>
            <p className={styles.CFcardDesc}>
                Recibe asesoria que te permita disfurtar del presente y vivir tranquilo sobre tu futuro financiero
        </p>
        </div>
    )
}

