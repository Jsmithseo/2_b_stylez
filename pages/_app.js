import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../src/app/components/Menu'; // Your Menu component
import Footer from '../src/app/components/Footer'; // Your Footer component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16644561919"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16644561919');
            `,
          }}
        />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
