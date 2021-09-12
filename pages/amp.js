import Head from 'next/head';
import Link from 'next/link';

export const config = { amp: true }

const amp = () => {
    return (
        <div
            style={
                {
                    backgroundColor: '#9444FB',
                    padding: '20px 10px'
                }
            }
        >
            <Head>
                <title>Otto App</title>
                <link rel="canonical" href="https://otto-app.com/"></link>
                <meta name="description" content="Toma el control de tus finanzas personales con otto"></meta>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900"></link>
            </Head>
            <h1
                style={
                    {
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Roboto'
                    }
                }>
                Otto app
            </h1>
            <amp-img src="https://avatars.otto-app.com/image001.png" width="1080" height="610" layout="responsive" alt="AMP"></amp-img>
            <p
                style={
                    {
                        color: '#FFF',
                        textAlign: 'center',
                        fontSize: 40,
                        fontFamily: 'Roboto',
                        margin: '25px 10px'
                    }
                }
            >
                Toma el control de tus finanzas personales
            </p>
            <p
                style={
                    {
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontSize: 16,
                        lineHeight: 2,
                        margin: '0 10px'
                    }
                }
            >
                Logra tus metas de ahorro, paga tus deudas y disfruta de una buena
                salud financiera. Otto te ayuda a planificar tus finanzas de manera
                inteligente, automatica y personalizada.
            </p>
            <a
                href="https://otto-app.com/"
                style={
                    {
                        color: '#FFF',
                        textDecoration: 'none',
                    }
                }
            >
                <div style={
                    {
                        height: 56,
                        width: 200,
                        borderRadius: 28,
                        background: '#58cb98',
                        margin: '20px auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }
                >
                    <p
                        style={
                            {
                                fontFamily: 'Roboto',
                            }
                        }
                    >
                        Mas informacion
                    </p>
                </div>
            </a>
        </div>
    )
}

export default amp;