import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';
import { Cookies } from 'react-cookie';

import Descargar from '../general/Descargar';
import Brand from '../general/Brand';

const cookies = new Cookies();

const Header = () => {
    const [islogIn, setLogIn] = useState(false)
    useEffect(() => {
        const token = cookies.get('token')
        if (token !== undefined) {
            setLogIn(true)
        } else {
            setLogIn(false)
        }
    }, [])
    return (
        <div className={`secction_body row_line ${styles.headreContainer}`}>
            <Brand />
            <div className="row_aling">
                <p>Preguntas Frecuentes</p>
                {islogIn ?
                    <Link href="/perfil">
                        <p>Cerrar sesion</p>
                    </Link> :
                    <Link href="/tyc">
                        <p>Terminos y condiciones</p>
                    </Link>}
                <Link href="/tienda">
                    <Descargar />
                </Link>
            </div>
        </div>
    )
}

export default Header
