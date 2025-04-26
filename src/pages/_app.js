import React from 'react';
import WrapperComponent from '@/components/wrapper';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <WrapperComponent>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#2196f3" />
            </Head>
            <Component {...pageProps} />
        </WrapperComponent>
    );
}
