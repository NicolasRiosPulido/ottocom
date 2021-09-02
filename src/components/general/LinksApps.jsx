import Image from 'next/image';
import styles from '../../styles/General.module.css';

const LinksApps = () => {
    return (
        <div className={styles.LinksApps}>
            <a href="https://apps.apple.com/co/app/otto/id1560048834?l=en" target="_blank">
                <Image
                    src={'/images/home/appleStore.png'}
                    alt="iphon descripcion"
                    width={135}
                    height={40}
                />
            </a>
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
