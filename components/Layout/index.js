import Head from 'next/head';

import GlobalStyle from '../../styles/global';

import Footer from '../Footer';

import { Content } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Eduardo Rodrigues</title>
        <meta name="description" content="Front-end developer" />
      </Head>
      <GlobalStyle />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}