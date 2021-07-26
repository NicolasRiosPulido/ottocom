import Head from 'next/head';

import Layout from '../src/components/layout';
import OpenHome from '../src/components/home/OpenHome';
import ComoFunciona from '../src/components/home/ComoFunciona';
import Subscripciones from '../src/components/home/Subscripciones';
import Instrucciones from '../src/components/home/Instrucciones';
import Contacto from '../src/components/home/Contacto';

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Otto App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="amphtml" href="https://testottodotcom.vercel.app/amp" />
      </Head>
      <div>
        <OpenHome />
        <ComoFunciona />
        <Subscripciones />
        <Instrucciones />
        <Contacto />
      </div>
    </Layout>
  )
}
