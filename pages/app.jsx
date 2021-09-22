import * as rdd from 'react-device-detect';

const app = () => {
    const { osName } = rdd.deviceDetect()
    console.log(rdd.deviceDetect())
    return (
        <div>
            dispositivo {osName}
        </div>
    )
}

export default app
