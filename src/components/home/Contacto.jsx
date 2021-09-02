import { useRef, useState } from 'react'
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

import Btn from '../general/Btn';

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAiLCJzaXRlIjoib3R0by1hcHAuY29tIn0.JT8wX7aMh9PSTFAIxZ4Q7ejb8Bn2bug0KXG8G67DfUc';

const Contacto = () => {
    const [cargando, setCargando] = useState(false)
    const nombre = useRef(null);
    const mail = useRef(null);
    const body = useRef(null);

    const submit = async () => {
        const data = {
            contacto: {
                nombre: nombre.current.value,
                email: mail.current.value,
                mensaje: body.current.value
            }
        }
        setCargando(true)
        try {
            await axios.post('https://api.otto-app.com/api/dotcom/contactenos', data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': TOKEN
                    },
                })
            setCargando(false)
        } catch (e) {
            setCargando(false)
        }
    }
    return (
        <div className={`secction_body`}>
            <div className={styles.NewsLetter}>
                <div className={styles.ContactForm}>
                    <h3>Contáctanos</h3>
                    <h4>
                        Brindar un gran servicio es nuestro objetivo primordial. Si tienes peticiones, quejas, reclamos, sugerencias o quieres trabajar con nosotros, déjanos tus datos y cuéntanos un poco más. Con mucho gusto trabajaremos en tus inquietudes o comentarios.
                    </h4>
                    <div className="row_line">
                        <div className="c_v">
                            <label>Nombre</label>
                            <input ref={nombre} className={styles.inputNewsLetter} type="text" />
                        </div>
                        <div className="c_v">
                            <label>Correo</label>
                            <input ref={mail} className={styles.inputNewsLetter} type="text" />
                        </div>
                    </div>
                    <textarea ref={body} className={`${styles.inputNewsLetter} ${styles.textAreNL}`} type="text" rows="4" cols="50" />
                    <div className="row_right">
                        <Btn onClick={submit} />
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
