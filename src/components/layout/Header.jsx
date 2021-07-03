import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';
import { Cookies } from 'react-cookie';

import Btn from '../general/Btn';
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
            <Brand main={true} />
            <div className="row_aling">
                <p>Preguntas Frecuentes</p>
                {islogIn ?
                    <Link href="/perfil">
                        <p>Cerrar sesion</p>
                    </Link> :
                    <Link href="/login">
                        <p>Iniciar sesion</p>
                    </Link>}
                <Link href="/tienda">
                    <Btn
                        Title="Subscribete"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header
