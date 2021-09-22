import React, { useEffect } from 'react';
import * as rdd from 'react-device-detect';

import { APP_STORE, GOOGLE_PLAY } from '../src/lisbs/const';

const app = () => {

    useEffect(() => {
        const urltipe = rdd.isAndroid ? GOOGLE_PLAY : APP_STORE;
        window.location.href = urltipe
    }, [])

    return (
        <div>

        </div>
    )
}

export default app;
