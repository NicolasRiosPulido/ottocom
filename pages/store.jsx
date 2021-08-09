import Image from 'next/image';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import styles from '../src/styles/Store.module.css';

import Brand from '../src/components/general/Brand';
import LinksApps from '../src/components/general/LinksApps';
import Btn from '../src/components/general/Btn';

const store = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 750px)' })
    return (
        <div className={styles.store}>
            <Head>
                <title>Otto App</title>
                <link rel="canonical" href="https://otto-app.com/store"></link>
                <meta name="description" content="Disfruta otto gratis por 3 meses"></meta>
            </Head>
            <div className="secction_body row">
                <div className={styles.text}>
                    <Brand logo={1.5} text={1.5} />
                    <h1>
                        Toma el control de tus finanzas personales
                    </h1>
                    <LinksApps />
                    <h3>
                        Logra tus metas de ahorro, paga tus deudas y disfruta de una buena salud financiera. Otto te ayuda a planificar tus finanzas de manera inteligente, automatica y personalizada.
                    </h3>
                    <div className={styles.btnContainer}>
                        <Btn
                            Title='Comenzar'
                            onClick={() => alert('strores')}
                        />
                    </div>
                    {!isMobile &&
                        <div className={styles.resposivePhone}>
                            <Image
                                src={'/images/home/iPhoneD.png'}
                                alt="iphon descripcion"
                                width={266}
                                height={533}
                                quality={100}
                            />
                        </div>
                    }
                </div>
                {isMobile &&
                    <div className={styles.images}>
                        <Image
                            src={'/images/home/iPhoneD.png'}
                            alt="iphon descripcion"
                            width={266}
                            height={533}
                            quality={100}
                        />
                        <div className={styles.background} />
                        <div className={styles.cardContainer}>
                            <div className={`${styles.card} ${styles.margincard}`}>
                                <Image
                                    src={'/images/home/CFIlustrationA.png'}
                                    alt="iphon descripcion"
                                    width={195}
                                    height={140}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.card}>
                                <Image
                                    src={'/images/home/CFIlustrationC.png'}
                                    alt="iphon descripcion"
                                    width={195}
                                    height={140}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default store
