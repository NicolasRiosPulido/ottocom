import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';
import { Cookies } from 'react-cookie';

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
        <div className={styles.headreContainer}>
            <h1>Este es el header</h1>
            <div className={styles.iconContainer}>
                {islogIn ?
                    <Link href="/perfil">
                        <span style={{ fontSize: 30, cursor: 'pointer' }}>
                            <i className="fas fa-user"></i>
                        </span>
                    </Link> :
                    <Link href="/login">
                        <span style={{ fontSize: 30, cursor: 'pointer' }}>
                            <i className="fas fa-sign-in-alt"></i>
                        </span>
                    </Link>}
                <Link href="/tienda">
                    <span style={{ fontSize: 28, cursor: 'pointer' }}>
                        <i className="fas fa-cart-arrow-down"></i>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Header
