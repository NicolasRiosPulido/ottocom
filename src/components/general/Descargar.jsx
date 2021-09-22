
import React, { useEffect, useState } from 'react';
import * as rdd from 'react-device-detect';
import styles from '../../styles/General.module.css';

import { APP_STORE, GOOGLE_PLAY } from '../../lisbs/const';

const Descargar = () => {

    const [url, seturl] = useState('')

    useEffect(() => {
        const urltipe = rdd.isAndroid ? GOOGLE_PLAY : APP_STORE;
        seturl(urltipe)
    }, [])

    return (
        <a
            className={styles.btnContainer}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <p>Descargar</p>
        </a>
    )
}

export default Descargar
