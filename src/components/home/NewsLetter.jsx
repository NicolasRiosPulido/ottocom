import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import Btn from '../general/Btn';

const NewsLetter = () => {
    return (
        <div className={`secction_body`}>
            <div className={styles.NewsLetter}>
                <h3>Subscribete</h3>
                <div className="row_line">
                    <input className={styles.inputNewsLetter} type="text" />
                    <Btn />
                </div>
                <div className={styles.newsLetterImg}>
                    <Image
                        src={'/images/home/news_letter.png'}
                        alt="news letter"
                        width={448}
                        height={510}
                    />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
