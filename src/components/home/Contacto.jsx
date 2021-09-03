import { useRef, useState } from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

import Btn from '../general/Btn';
import { useInput } from '../../hook/useInput';
import { InputText } from '../../components/general/InputText';

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAiLCJzaXRlIjoib3R0by1hcHAuY29tIn0.JT8wX7aMh9PSTFAIxZ4Q7ejb8Bn2bug0KXG8G67DfUc';

const Contacto = () => {
    const [cargando, setCargando] = useState(false)
    const [enviado, setEnviado] = useState(false);
    const mail = useInput("mail");
    const nombre = useInput("nombre");
    const body = useRef(null);

    const submit = async () => {
        const mailE = mail.useError()
        const nombreE = nombre.useError()
        if (!nombreE && !mailE) {
            const data = {
                contacto: {
                    nombre: nombre.value,
                    email: mail.value,
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
                setEnviado(true)
            } catch (e) {
                setCargando(false)
                setEnviado(false)
            }
        } else { setEnviado(false) }
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
                        <div className="c_v grow">
                            <InputText
                                {...nombre}
                                titulo="Nombre"
                                disable={false}
                                disable={cargando}
                            />
                        </div>
                        <div className="c_v grow ml-20">
                            <InputText
                                {...mail}
                                titulo="Correo"
                                disable={false}
                                disable={cargando}
                            />
                        </div>
                    </div>
                    <textarea ref={body} className={`${styles.inputNewsLetter} ${styles.textAreNL}`} type="text" rows="4" cols="50" />
                    {enviado && <p className={styles.succesMensaje}>¡Mensaje enviado!</p>}
                    <div className="row_right">
                        <Btn Title="Enviar" cargando={cargando} onClick={submit} />
                    </div>
                </div>
                <img
                    src={'https://avatars.otto-app.com/dotcom/home/news_letter.png'}
                    alt="news letter"
                    width={326}
                    height={472}
                />
            </div>
        </div>
    )
}

export default Contacto
