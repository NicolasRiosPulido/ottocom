import styles from '../src/styles/tyc.module.css';

const TYC = "https://doc-archivos.s3.us-west-2.amazonaws.com/tyc_otto.pdf"

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
