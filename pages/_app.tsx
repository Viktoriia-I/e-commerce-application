import { AppProps } from 'next/app';
import '@assets/main.css';
import { PropsWithChildren } from 'react';
import { Layout } from '@components/common';

const MyApp = ({ Component, pageProps }: AppProps & { Component: { Layout: React.FunctionComponent<PropsWithChildren> } }) => {
  // const Layout = Component.Layout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;