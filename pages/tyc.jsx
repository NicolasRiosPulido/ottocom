import styles from '../src/styles/tyc.module.css';

const TYC = "https://avatars.otto-app.com/doc/tyc-ottoapp-20210811.pdf"

const tyc = () => {
    return (

        <iframe
            src={TYC}
            frameborder="0"
            className={styles.tycondiciones}
        >
        </iframe>
    )
}

export default tyc;
