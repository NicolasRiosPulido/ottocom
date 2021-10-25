import styles from '../../styles/General.module.css';
import MobileStoreButton from 'react-mobile-store-button';

import { APP_STORE, GOOGLE_PLAY } from '../../lisbs/const';

const LinksApps = () => {
    return (
        <div className={styles.LinksApps}>
            <MobileStoreButton
                store="ios"
                height={40}
                url={APP_STORE}
                linkProps={{ title: 'iOS Store Button' }}
            />
            <MobileStoreButton
                store="android"
                height={58}
                url={GOOGLE_PLAY}
                linkProps={{ title: 'iOS Store Button' }}
            />
        </div>
    )
}

export default LinksApps
