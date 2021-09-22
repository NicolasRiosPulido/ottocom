import styles from '../../styles/Home.module.css';
import { useMediaQuery } from 'react-responsive';

import Btn from '../general/Btn';
import Descargar from '../general/Descargar';
import LinksApps from '../general/LinksApps';

const OpenHome = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    return (
        <div className={styles.OpenContainer}>
            <div className={styles.OpenBody}>
                <div className={styles.homeImgContainer}>
                    <img
                        src={'https://avatars.otto-app.com/dotcom/home/iPhoneA.png'}
                        alt="iphon descripcion"
                        className={styles.cellPhoneA}
                    />
                    <img
                        src={'https://avatars.otto-app.com/dotcom/home/iPhoneB.png'}
                        alt="iphon descripcion"
                        className={styles.cellPhoneB}
                    />
                </div>
                <div className={styles.OpenTextContainer}>
                    <h1 >Toma el control de tus finanzas personales</h1>
                    <h2 className={styles.OpenHomeTextDesc}>
                        Otto te ayuda a planificar tus finanzas de manera inteligente, automática y personalizada.
                        Logra tus metas de ahorro, paga tus deudas y disfruta de salud financiera.
                   </h2>
                    <LinksApps />
                    <span style={{ height: isMobile ? 78 : 40 }} />
                    <Descargar />
                </div>
            </div>
        </div>
    )
}

export default OpenHome
