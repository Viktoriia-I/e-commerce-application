import { AppProps } from 'next/app';
import '@assets/main.css';
import React, { PropsWithChildren } from 'react';

const MyApp = ({ Component, pageProps }: AppProps & { Component: { Layout: React.FunctionComponent<PropsWithChildren> } }) => {
  const Layout = Component.Layout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;