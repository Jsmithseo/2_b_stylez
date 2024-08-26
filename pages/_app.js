import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS globally

function MyApp({ Component, pageProps }) {
  // Component is the active page
  // pageProps are the initial props preloaded for your page

  return <Component {...pageProps} />;
}

export default MyApp;