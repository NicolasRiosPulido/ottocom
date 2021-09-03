import Image from 'next/image';
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
                        src={'/images/home/iPhoneA.png'}
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
                    <p className={styles.OpenHomeTextDesc}>
                        Logra tus metas de ahorro, paga tus deudas y disfruta de una buena
                        salud financiera. Otto te ayuda a planificar tus finanzas de manera
                        inteligente, automatica y personalizada.
                   </p>
                    <LinksApps />
                    <span style={{ height: isMobile ? 78 : 40 }} />
                    <Descargar />
                </div>
            </div>
        </div>
    )
}

export default OpenHome
