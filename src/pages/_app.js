import React from 'react';
import WrapperComponent from "@/components/wrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WrapperComponent>
      <Component {...pageProps} />
    </WrapperComponent>
  );
}
