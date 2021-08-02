import Head from 'next/head';

import Layout from '../src/components/layout';
import OpenHome from '../src/components/home/OpenHome';
import Phones from '../src/components/home/Phones';
import ComoFunciona from '../src/components/home/ComoFunciona';
import Subscripciones from '../src/components/home/Subscripciones';
import Instrucciones from '../src/components/home/Instrucciones';
import Contacto from '../src/components/home/Contacto';

const DATA_ESTRUCTURADA = {
  "@context": "https://schema.org",
  "@graph":
    [
      {
        "@type": "Organization",
        "@id": "https://otto-app.com/#organization",
        "name": "Otto APP",
        "url": "https://otto-app.com/",
        "sameAs": [
          "https://www.facebook.com/axos.soluciones",
          "https://www.linkedin.com/in/otto-app-co/?originalSubdomain=co",
          "https://www.youtube.com/channel/UCetLnaI0bwQnDe4Rdl0xrtg?view_as=subscriber",
          "https://twitter.com/Axos_Soluciones"
        ],
        "logo":
        {
          "@type": "ImageObject",
          "@id": "https://www.axos.es/#logo",
          "inLanguage": "es",
          "url": "https://www.axos.es/wp-content/uploads//2020/02/LOGO_AXOS_MARGEN.png",
          "width": 3038,
          "height": 1654,
          "caption": "Otto app"
        },
        "image":
        {
          "@id": "https://www.axos.es/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://otto.com/#website",
        "url": "https://otto.com/",
        "name": "Otto app finanzas personal",
        "inLanguage": "es",
        "description": "Toma el control de tus finanzas personales con otto",
        "publisher":
        {
          "@id": "https://otto-app.com/#organization"
        },
        "potentialAction":
          [
            {
              "@type": "SearchAction",
              "target": "https://www.axos.es/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.axos.es/#webpage",
        "url": "https://www.axos.es/",
        "name": "Toma el control de tus finanzas personales con otto",
        "isPartOf":
        {
          "@id": "https://www.axos.es/#website"
        },
        "inLanguage": "es",
        "about":
        {
          "@id": "https://www.axos.es/#organization"
        },
        "datePublished": "2018-04-24T03:26:51+00:00",
        "dateModified": "2021-07-05T08:44:45+00:00",
        "description": "Axos Soluciones, el Software ERP para pymes y empresas de Distribuci\u00f3n, Almacenes, Centrales de Compras y Franquicias.",
        "potentialAction":
          [
            {
              "@type": "ReadAction",
              "target":
                [
                  "https://otto.com/"
                ]
            }
          ]
      }]
}

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Otto App</title>
        <link rel="canonical" href="https://otto-app.com/"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="amphtml" href="https://otto-app.com/amp" />
        <meta name="description" content="Toma el control de tus finanzas personales con otto"></meta>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DATA_ESTRUCTURADA) }} />
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
