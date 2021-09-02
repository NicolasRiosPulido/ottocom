
import * as rdd from 'react-device-detect';

import styles from '../../styles/General.module.css';

import { APP_STORE, GOOGLE_PLAY } from '../../lisbs/const';

const Descargar = () => {
    return (
        <a
            className={styles.btnContainer}
            href={rdd.isIOS ? APP_STORE : GOOGLE_PLAY}
            target="_blank"
        >
            <p>Descargar</p>
        </a>
    )
}

export default Descargar
