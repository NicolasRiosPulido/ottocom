import { Warning } from 'react-ionicons'

import styles from '../../styles/General.module.css';

export const InputText = ({
    useValor,
    mensaje,
    disable,
    titulo,
    tipo,
    usekeypress,
}) => {

    return (
        <div className={styles.inputResponsive}>
            <label className={styles.tituloInput}>{titulo}</label>
            <input
                name={titulo}
                type={tipo}
                disabled={disable}
                error={mensaje}
                onChange={useValor}
                onKeyPress={usekeypress}
                className={mensaje ? styles.inputStileE : styles.inputStile}
            />
            {mensaje &&
                <div className="row_aling">
                    <Warning
                        color={'#FB6969'}
                        title={''}
                        height="14px"
                        width="14px"
                    />
                    <p className={styles.errorInput}>{mensaje}</p>
                </div>
            }
        </div>
    );
};
