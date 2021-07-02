import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import Btn from '../general/Btn';
import LinksApps from '../general/LinksApps';

const OpenHome = () => {
    return (
        <div className={styles.OpenContainer}>
            <div className={styles.OpenBody}>
                <div className={styles.homeImgContainer}>
                    <div className={styles.cellPhoneB}>
                        <Image
                            src={'/images/home/iPhone_X.png'}
                            alt="iphon descripcion"
                            width={310}
                            height={580}
                        />
                    </div>
                    <div className={styles.cellPhoneA}>
                        <Image
                            src={'/images/home/iPhone_X.png'}
                            alt="iphon descripcion"
                            width={310}
                            height={580}
                        />
                    </div>
                </div>
                <div className={styles.OpenTextContainer}>
                    <h2 >Toma el control de tus finanzas personales</h2>
                    <p className={styles.OpenHomeTextDesc}>Logra tus metas de ahorro, paga tus deudas y disfruta de una buena
                    salud financiera. Otto te ayuda a planificar tus finanzas de manera
             inteligente, automatica y personalizada.</p>
                    <LinksApps />
                    <span style={{ height: 78 }} />
                    <Btn />
                </div>
            </div>
        </div>
    )
}

export default OpenHome
