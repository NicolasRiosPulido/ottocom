import Head from 'next/head';

import Layout from '../src/components/layout';
import OpenHome from '../src/components/home/OpenHome';
import Phones from '../src/components/home/Phones';
import ComoFunciona from '../src/components/home/ComoFunciona';
import Subscripciones from '../src/components/home/Subscripciones';
import Instrucciones from '../src/components/home/Instrucciones';
import Contacto from '../src/components/home/Contacto';

const FIREBASE =
  `var firebaseConfig = {
  apiKey: "AIzaSyAh1ZbRQB9fWZQz6kM7yJQtR_QnI3BnoSg",
  authDomain: "otto-app-ab4ec.firebaseapp.com",
  projectId: "otto-app-ab4ec",
  storageBucket: "otto-app-ab4ec.appspot.com",
  messagingSenderId: "439554359845",
  appId: "1:439554359845:web:ff69395a0078ee1f1575cc",
  measurementId: "G-TC3JYQC6SY"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();`

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
          "https://www.instagram.com/otto.app.co/",
          "https://www.facebook.com/OttoFintech",
          "https://www.linkedin.com/company/otto-app",
          "https://twitter.com/otto_app"
        ],
        "logo":
        {
          "@type": "ImageObject",
          "@id": "https://otto-app.com/#logo",
          "inLanguage": "es",
          "url": "https://doc-archivos.s3.us-west-2.amazonaws.com/Otto_brand_app.png",
          "width": 3038,
          "height": 1654,
          "caption": "Otto app"
        },
        "image":
        {
          "@id": "https://otto-app.com/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://otto-app.com/#website",
        "url": "https://otto-app.com",
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
              "target": "https://otto-app.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ]
      },
      {
        "@type": "WebPage",
        "@id": "https://otto-app.com/#webpage",
        "url": "https://otto-app.com/",
        "name": "Toma el control de tus finanzas personales con otto",
        "isPartOf":
        {
          "@id": "https://otto-app.com/#website"
        },
        "inLanguage": "es",
        "about":
        {
          "@id": "https://otto-app.com/#organization"
        },
        "datePublished": "2018-04-24T03:26:51+00:00",
        "dateModified": "2021-07-05T08:44:45+00:00",
        "description": "Toma el control de tus finanzas personales con otto",
        "potentialAction":
          [
            {
              "@type": "ReadAction",
              "target":
                [
                  "https://otto-app.com/"
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
        <meta name="copyright" content="otto-app" />
        <meta name="language" content="ES" />
        <meta name="revised" content="Sunday, July 18th, 2021, 5:15 pm" />
        <meta name="abstract" content="Logra tus metas de ahorro, paga tus deudas y disfruta de una buena salud financiera. Otto te ayuda a planificar tus finanzas de manera inteligente, automatica y personalizada." />
        <meta name="topic" content="Finanzas personales" />
        <meta name="Classification" content="Business" />
        <meta name="author" content="name, dev@otto-app.com" />
        <meta name="designer" content="Juan Pablo Amaya" />
        <meta name="reply-to" content="contacto@otto-app.com" />
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="X-UA-Compatible" content="chrome=1" />
        <script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-analytics.js"></script>
        <script dangerouslySetInnerHTML={{ __html: FIREBASE }} />
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
