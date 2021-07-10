import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import Btn from '../general/Btn';

const Contacto = () => {
    return (
        <div className={`secction_body`}>
            <div className={styles.NewsLetter}>
                <div className={styles.ContactForm}>
                    <h3>Contáctanos</h3>
                    <h4>
                        Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
                    </h4>
                    <div className="row_line">
                        <label>Nombre</label>
                        <input className={styles.inputNewsLetter} type="text" />
                        <label>Correo</label>
                        <input className={styles.inputNewsLetter} type="text" />
                    </div>
                    <textarea className={styles.inputNewsLetter} type="text" rows="4" cols="50" />
                    <div className="row_right">
                        <Btn />
                    </div>
                </div>
                <Image
                    src={'/images/home/news_letter.png'}
                    alt="news letter"
                    width={326}
                    height={472}
                />
            </div>
        </div>
    )
}

export default Contacto
