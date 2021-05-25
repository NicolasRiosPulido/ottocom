import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../src/styles/Home.module.css'

import Layout from '../src/components/layout'

export const getStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/location')
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data
    }
  }
}

export default function Home(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Otto App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="amphtml" href="https://testottodotcom.vercel.app/amp" />
        </Head>
        <Image
          src="/images/180.png"
          height={144}
          width={144}
          alt="Your Name"
        />
        <h1 >Otto.com</h1>
      </div>
    </Layout>
  )
}
