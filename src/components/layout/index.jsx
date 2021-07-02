import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/Layout.module.css';

const Layout = (props) => {
    const { children } = props
    return (
        <div className={styles.cuerpo}>
            <Head>
                <script src="https://kit.fontawesome.com/4d421b6c38.js" crossOrigin="anonymous"></script>
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

