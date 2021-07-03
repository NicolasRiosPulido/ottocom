import styles from '../../styles/Layout.module.css';

import LinksApps from '../general/LinksApps';
import Brand from '../general/Brand';
import Social from '../general/Social';

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
            <div className={styles.footerGeneralInfo}>
                <div className={`row_center ${styles.footerGeneralBrand}`}>
                    <Brand />
                </div>
                <div className={`secction_body row`}>
                    <p>Donec viverra purus a blandit Donec viverra purus a blandit</p>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Footer
