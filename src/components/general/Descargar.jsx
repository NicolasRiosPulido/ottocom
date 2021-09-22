
import * as rdd from 'react-device-detect';

import styles from '../../styles/General.module.css';

import { APP_STORE, GOOGLE_PLAY } from '../../lisbs/const';

const Descargar = () => {

    if (rdd.isAndroid || rdd.isIOS) {
        return (
            <a
                className={styles.btnContainer}
                href={GOOGLE_PLAY}
                target="_blank"
                rel="noreferrer"
            >
                <p>Descargar</p>
            </a>
        )

    } else {
        return (
            <a
                className={styles.btnContainer}
                href={APP_STORE}
                target="_blank"
                rel="noreferrer"
            >
                <p>Descargar</p>
            </a>
        )
    }

}

export default Descargar
