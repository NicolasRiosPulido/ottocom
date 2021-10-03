import React, { useRef } from 'react';
import Link from 'next/link';
import {
    FacebookShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookShareCount,
    FacebookIcon,
    LinkedinIcon,
    EmailIcon
} from 'react-share';
import { DocumentsOutline } from 'react-ionicons'
import styles from '../../styles/Layout.module.css';

import LinksApps from '../general/LinksApps';
import Brand from '../general/Brand';
import Social from '../general/Social';

const Footer = () => {

    const textCopi = useRef(null)

    const handleCopi = () => {
        textCopi.current.select();
        document.execCommand('copy');
    }
    return (
        <div className={styles.footerContainer}>
            <div className={styles.FooterCard}>
                <div className={styles.FooterLine} />
                <div className={styles.FooterTexContainer} >
                    <p className={styles.FooterCardTitle}>
                        Compartir en:
                    </p>
                    <div className={styles.socialCOntainer}>
                        <div>
                            <FacebookShareButton url={"https://www.facebook.com/OttoFintech"}>
                                <FacebookIcon
                                    size={40}
                                    round
                                />
                            </FacebookShareButton>
                            <FacebookShareCount url={"https://www.facebook.com/OttoFintech"}>
                                {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                            </FacebookShareCount>
                        </div>
                        <div>
                            <LinkedinShareButton url={"https://www.linkedin.com/company/otto-app"}>
                                <LinkedinIcon
                                    size={40}
                                    round
                                />
                            </LinkedinShareButton>
                        </div>
                        <div>
                            <EmailShareButton url={"https://peing.net/ja/"}>
                                <EmailIcon
                                    size={40}
                                    round
                                />
                            </EmailShareButton>
                        </div>
                    </div>
                    <p className={styles.FooterCardshare}>
                        O copia el link y compartelo:
                    </p>
                    <div className="p_r">
                        <input
                            defaultValue="https://otto-app.com/"
                            desable="true"
                            className={styles.inputShare}
                            ref={textCopi}
                        />
                        <DocumentsOutline
                            color={'#5A38FD'}
                            height="25px"
                            width="25px"
                            onClick={handleCopi}
                            className={styles.iconInputShare}
                        />
                    </div>
                    <p className={styles.FooterCardDesc}>
                        ¡Descargala ya!
                    </p>
                    <LinksApps />
                </div>
            </div>
            <div className={styles.footerGeneralInfo}>
                <div className={`row_center ${styles.footerGeneralBrand}`}>
                    <Brand />
                </div>
                <div className={`secction_body row`}>
                    <Link href="https://avatars.otto-app.com/doc/tyc-ottoapp-20210811.pdf">
                        <p className="pointer">Terminos y condiciones</p>
                    </Link>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Footer
