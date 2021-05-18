import { useState } from "react";

const Lengh = 41;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const useInput = (tipo, require = true) => {
    const [valor, setValor] = useState("");
    const [errorMesaje, setErrorMesaje] = useState("");
    const changeValue = (e) => {
        if (errorMesaje) {
            validarError();
        }
        setValor(e.target.value);
    };

    const onKeyPress = (event) => {
        const regex = getRegex(tipo);
        const key = String.fromCharCode(
            !event.charCode ? event.which : event.charCode
        );
        if (!regex.test(key) || event.target.value.length > Lengh) {
            event.preventDefault();
        }
        if (errorMesaje !== "") {
            setErrorMesaje("");
        }
    };
    const validarError = () => {
        //valido longitud y correo
        if (valor.length === 0 && require) {
            setErrorMesaje("Por favor complete el campo");
            return true;
        } else if (tipo === 'mail' && !regexMail.test(valor)) {
            setErrorMesaje("Correo no valido");
            return true;
        } else {
            setErrorMesaje("");
            return false;
        }
    };
    return {
        mensaje: errorMesaje,
        value: valor,
        useValor: changeValue,
        useError: validarError,
        usekeypress: onKeyPress,
        tipo,
    };
};
const getRegex = (tipob) => {
    switch (tipob) {
        case "textoAll":
            return new RegExp("[^~,]");
        case "textoNumber":
            return new RegExp("[a-zA-ZÑñ 0-9]");
        case "text":
            return new RegExp("[a-zA-ZÑñ ]");
        case "password":
            return new RegExp("[^~,]");
        case "number":
            return new RegExp("[0-9]");
        case "mail":
            return new RegExp("[^~,]");
        default:
            return new RegExp("[^~,]");
    }
};
