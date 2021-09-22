import styles from '../../styles/General.module.css';

import { APP_STORE, GOOGLE_PLAY } from '../../lisbs/const';

const LinksApps = () => {
    return (
        <div className={styles.LinksApps}>
            <a href={APP_STORE} rel="noreferrer" target="_blank">
                <img
                    src={'https://avatars.otto-app.com/dotcom/home/appleStore.png'}
                    alt="iphon descripcion"
                    width={135}
                    height={40}
                />
            </a>
            <a href={GOOGLE_PLAY} rel="noreferrer" target="_blank">
                <img
                    src={'https://avatars.otto-app.com/dotcom/home/googleStore.png'}
                    alt="iphon descripcion"
                    width={135}
                    height={40}
                />
            </a>
        </div>
    )
}

export default LinksApps
