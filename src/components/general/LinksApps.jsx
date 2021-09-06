import Image from 'next/image';
import styles from '../../styles/General.module.css';

import { APP_STORE, GOOGLE_PLAY } from '../../lisbs/const';

const LinksApps = () => {
    return (
        <div className={styles.LinksApps}>
            <a href={APP_STORE} rel="noreferrer" target="_blank">
                <Image
                    src={'/images/home/appleStore.png'}
                    alt="iphon descripcion"
                    width={135}
                    height={40}
                />
            </a>
            <a href={GOOGLE_PLAY} rel="noreferrer" target="_blank">
                <Image
                    src={'/images/home/googleStore.png'}
                    alt="iphon descripcion"
                    width={135}
                    height={40}
                />
            </a>
        </div>
    )
}

export default LinksApps
