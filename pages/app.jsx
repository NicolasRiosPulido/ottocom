import * as rdd from 'react-device-detect';

const app = () => {
    const { osName } = rdd.deviceDetect()
    console.log(rdd.isAndroid)
    return (
        <div>
            dispositivo {osName} {rdd.isAndroid && ' es un android'}
        </div>
    )
}

export default app
