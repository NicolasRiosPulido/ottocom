import Image from 'next/image';
import styles from '../../styles/General.module.css';

const Brand = (props) => {
    const { main = false } = props
    return (
        <div className="row_aling">
            <Image
                src={'/images/icon_withe.png'}
                alt="iphon descripcion"
                width={30}
                height={30}
            />
            {main ?
                <h1 className={styles.brandTitle}>
                    Otto
                </h1> :
                <p className={styles.brandTitle} style={{ fontSize: 30 }}>
                    Otto
                </p>
            }
        </div>
    )
}

export default Brand
