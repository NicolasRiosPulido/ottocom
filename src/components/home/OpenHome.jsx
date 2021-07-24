import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { useMediaQuery } from 'react-responsive';

import Btn from '../general/Btn';
import LinksApps from '../general/LinksApps';

const OpenHome = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    return (
        <div className={styles.OpenContainer}>
            <div className={styles.OpenBody}>
                <div className={styles.homeImgContainer}>
                    <div className={styles.cellPhoneA}>
                        <Image
                            src={'/images/home/iPhone_X.png'}
                            alt="iphon descripcion"
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    <div className={styles.cellPhoneB}>
                        <Image
                            src={'/images/home/iPhone_X.png'}
                            alt="iphon descripcion"
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
                <div className={styles.OpenTextContainer}>
                    <h2 >Toma el control de tus finanzas personales</h2>
                    <p className={styles.OpenHomeTextDesc}>
                        Logra tus metas de ahorro, paga tus deudas y disfruta de una buena
                        salud financiera. Otto te ayuda a planificar tus finanzas de manera
                        inteligente, automatica y personalizada.
                   </p>
                    <LinksApps />
                    <span style={{ height: isMobile ? 78 : 40 }} />
                    <Btn Title="Descagar" />
                </div>
            </div>
        </div>
    )
}

export default OpenHome
