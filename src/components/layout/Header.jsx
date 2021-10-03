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
                <Link href="https://avatars.otto-app.com/doc/tyc-ottoapp-20210811.pdf">
                    <p>Terminos y condiciones</p>
                </Link>
                <Link href="/tienda">
                    <Descargar />
                </Link>
            </div>
        </div>
    )
}

export default Header
