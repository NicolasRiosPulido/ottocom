import { useState } from 'react'
import Head from 'next/head';
import Router from 'next/router';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import AppleLogin from 'react-apple-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import md5 from 'md5';
import styles from '../src/styles/Login.module.css';

import { handleAuthLogIn } from '../src/helpers/handleAuth';
import { InputText } from '../src/components/general/InputText';
import { useInput } from '../src/hook/useInput';
import { API } from '../src/lisbs/const';

export const getServerSideProps = async (ctx) => {
    return handleAuthLogIn(ctx)
}

const login = (props) => {

    const [cargando, setCargando] = useState(false)
    const [serverError, setServerError] = useState('')

    const cookies = new Cookies();
    const Mail = useInput("mail");
    const Password = useInput("password");

    const handleSubmit = async () => {
        const mailE = Mail.useError()
        const passwordE = Password.useError()
        if (!passwordE && !mailE) {
            setCargando(true)
            const psswordMd = md5(Password.value)
            try {
                const resLogIn = await axios.post(`${API}auth/login`, {
                    usuario: Mail.value,
                    password: psswordMd
                })
                const { data: { jwt } } = resLogIn
                cookies.set('token', jwt)
                Router.push('/')
                setCargando(false)
            } catch (error) {
                const { response: { data: { ms = '' } = {} } = {} } = error;
                setCargando(false)
                setServerError(ms)
                console.log(ms)
            }
        }
    }

    const handleFacebbok = async (resp) => {
        console.log('respuesta facebook', resp)
    }
    const responseGoogle = async (resp) => {
        console.log('respuesta google', resp)
        try {
            console.log('entro aca')
            const resLogIn = await axios.post(`${API}/auth/sociallogin/`, {
                data: resp,
                type: 'google'
            })
            console.log('respuesta', resLogIn)
            //cookies.set('token', jwt)
            // Router.push('/')
            setCargando(false)
        } catch (error) {
            console.log('EEEEE', error)
            setServerError('Error de autenticacion con Google')
        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Autenticacion</title>
            </Head>
            <div className={styles.containerLogin}>
                <h1>Log in Otto</h1>
                <InputText {...Mail} titulo="Correo" disable={false} disable={cargando} />
                <InputText {...Password} titulo="Contraseña" disable={false} disable={cargando} />
                <p>{serverError}</p>
                <button type="button" onClick={handleSubmit} disabled={cargando}>
                    Continuar
                </button>
                <AppleLogin
                    clientId="com.otto-app.www"
                    redirectURI={"https://api.otto-app.com/api/auth/apple/"}
                    responseType={"code"}
                    scope={"name email"}
                    responseMode={"form_post"}
                    usePopup={false}
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick} disabled={cargando}>Continuar con Apple</button>
                    )}
                />
                <FacebookLogin
                    appId="517418439418746"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebbok}
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick} disabled={cargando}>Continuar con Facebook</button>
                    )}
                />
                <GoogleLogin
                    clientId="439554359845-bvcpqa53h7e66voe82l9aq0b32fmuonf.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={(resp) => console.log('error', resp)}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={cargando}>Continuar con Google</button>
                    )}
                />
            </div>
        </div>
    )
}

export default login
