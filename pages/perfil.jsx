import Head from 'next/head';
import Router from 'next/router';
import { Cookies } from 'react-cookie';

import { handleAuth } from '../src/helpers/handleAuth';

export const getServerSideProps = async (ctx) => {
    return handleAuth(ctx)
}

const perfil = (props) => {
    const cookies = new Cookies();

    const handlelohOut = () => {
        cookies.remove('token')
        Router.push('/')
    }
    return (
        <div>
            <Head>
                <title>perfil</title>
            </Head>
            <h1>pagina de perfil</h1>
            <button type="button" onClick={handlelohOut}>cerrar sesion</button>
        </div>
    )
}

export default perfil
