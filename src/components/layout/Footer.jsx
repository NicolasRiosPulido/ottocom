import styles from '../../styles/Layout.module.css';

import LinksApps from '../general/LinksApps';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.FooterCard}>
                <div className={styles.FooterLine} />
                <div className={styles.FooterTexContainer} >
                    <p className={styles.FooterCardTitle}>Donec viverra purus a blandit</p>
                    <p className={styles.FooterCardDesc}>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.</p>
                    <LinksApps />
                </div>
            </div>
        </div>
    )
}

export default Footer
