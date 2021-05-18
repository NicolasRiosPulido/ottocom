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
        <div className={styles.container}>
            <label className={styles.titulo}>{titulo}</label>
            <input
                name={titulo}
                type={tipo}
                disabled={disable}
                error={mensaje}
                onChange={useValor}
                onKeyPress={usekeypress}
                className={styles.inputStile}
            />
            {mensaje ? (
                <div>
                    <p>{mensaje}</p>
                </div>
            ) : null}
        </div>
    );
};
