import Image from 'next/image';
import styles from '../../styles/General.module.css';

const Brand = (props) => {
    const { logo = 1, text = 1 } = props
    return (
        <div className="row_aling">
            <Image
                src={'/images/icon_withe.png'}
                alt="iphon descripcion"
                width={30 * logo}
                height={30 * logo}
            />
            <p className={styles.brandTitle} style={{ fontSize: 30 * text }}>
                Otto
            </p>
        </div>
    )
}

export default Brand
