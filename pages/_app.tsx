import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
