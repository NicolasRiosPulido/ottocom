import Link from 'next/link';

import styles from '../src/styles/Error.module.css';
import Image from 'next/image';

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <div className="secction_body row_aling">
                <Image
                    src={'/images/icon_color.png'}
                    alt="iphon descripcion"
                    width={30}
                    height={30}
                />
                <p className={styles.title}>Otto</p>
            </div>
            <div className={styles.body}>
                <Image
                    src={'/images/error/error_ilustration.png'}
                    alt="Iluestarcion A"
                    width={705}
                    height={454}
                    className={styles.ComoFuncionaImg}
                />
                <h1>¡Ups, tenemos un probema! </h1>
                <p>
                    No encontramos los que estas buscando, pero acá te dejamos algunos links que te pueden ayudar,
            </p>

            </div>
            <Link href="/">
                <div className={styles.btnReturn}>
                    <p>Volver al home</p>
                </div>
            </Link>
            <div className="secction_body">
                <p>
                    Donec viverra purus a blandit Donec viverra purus a blandit
            </p>
            </div>
        </div>
    )
}

export default Custom404