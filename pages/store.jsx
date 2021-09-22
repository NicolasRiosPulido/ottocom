import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import styles from '../src/styles/Store.module.css';

import Brand from '../src/components/general/Brand';
import LinksApps from '../src/components/general/LinksApps';
import Descargar from '../src/components/general/Descargar';

const store = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 750px)' })
    return (
        <div className={styles.store}>
            <Head>
                <title>Otto App Tienda</title>
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
                        Otto te ayuda a planificar tus finanzas de manera inteligente, automática y personalizada.
                        Logra tus metas de ahorro, paga tus deudas y disfruta de salud financiera.
                    </h3>
                    <div className={styles.btnContainer}>
                        <Descargar />
                    </div>
                    {!isMobile &&
                        <div className={styles.resposivePhone}>
                            <img
                                src={'https://avatars.otto-app.com/dotcom/home/iPhoneD.png'}
                                alt="iphon descripcion"
                                width={266}
                                height={533}
                            />
                        </div>
                    }
                </div>
                {isMobile &&
                    <div className={styles.images}>
                        <img
                            src={'https://avatars.otto-app.com/dotcom/home/iPhoneD.png'}
                            alt="iphon descripcion"
                            width={266}
                            height={533}
                        />
                        <div className={styles.background} />
                        <div className={styles.cardContainer}>
                            <div className={`${styles.card} ${styles.margincard}`}>
                                <img
                                    src={'https://avatars.otto-app.com/dotcom/home/CFIlustrationA.png'}
                                    alt="iphon descripcion"
                                    width={195}
                                    height={140}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.card}>
                                <img
                                    src={'https://avatars.otto-app.com/dotcom/home/CFIlustrationC.png'}
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
