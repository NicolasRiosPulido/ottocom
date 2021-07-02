import Image from 'next/image';
import styles from '../../styles/General.module.css';

const LinksApps = () => {
    return (
        <div className={styles.LinksApps}>
            <Image
                src={'/images/home/appleStore.png'}
                alt="iphon descripcion"
                width={135}
                height={40}
            />
            <Image
                src={'/images/home/googleStore.png'}
                alt="iphon descripcion"
                width={135}
                height={40}
            />
        </div>
    )
}

export default LinksApps
