import Head from 'next/head';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import AppleLogin from 'react-apple-login';
import styles from '../src/styles/Login.module.css';

import { handleAuthLogIn } from '../src/helpers/handleAuth';

export const getServerSideProps = async (ctx) => {
    return handleAuthLogIn(ctx)
}

const login = (props) => {
    const cookies = new Cookies();
    const handleSubmit = () => {
        const token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJub21icmUiOiJOaWNvbGFzIFJpb3MiLCJpZF9hdmF0YXIiOjMsInVzdWFyaW8iOiJucmlvc3A3QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMjVkNTVhZDI4M2FhNDAwYWY0NjRjNzZkNzEzYzA3YWQiLCJmYWNlYm9va19pZCI6IiIsImdvb2dsZV9pZCI6IjEwNzgyNzczMzg3OTYyMzU1NTE4MiIsImFwcGxlX2lkIjoiIiwiZGlzcG9zaXRpdm8iOiJhYTdlOWQwYS02MWM5LTRjMzItYjMyMC00NWE1MTNhZDVkMGEiLCJmZWNoYV9jcmVhY2lvbiI6IjIwMjEtMDUtMTFUMjA6NTE6NDMuMDAwWiIsImNhbWJpYXJfcGFzc3dvcmQiOjAsInVybF9hdmF0YXIiOiJodHRwczovL2F2YXRhcnMub3R0by1hcHAuY29tL2gzLnBuZyJ9LCJpYXQiOjE2MjA4NDI5OTgsImV4cCI6MTY1MjM3ODk5OH0.Q5adO6rlvWj-tm93uHYmpfodCWYmy5rW1zsWriRLt9Q'
        cookies.set('token', token)
        Router.push('/')
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Autenticacion</title>
            </Head>
            <div>
                <input type="test" defaultValue="admin" />
                <br />
                <input type="pasword" defaultValue="admin" />
                <br />
                <input type="submit" onClick={handleSubmit} />
                <AppleLogin clientId="ottowebauth" redirectURI="https://otto-app.com" />
            </div>
        </div>
    )
}

export default login
