import Head from 'next/head';
import { Fade } from "react-awesome-reveal";

import GlobalStyle from '../../styles/global';

import Footer from '../Footer';

import { Content } from './styles';

export default function Layout({ children, gray }) {
  return (
    <>
      <Head>
        <title>Eduardo Rodrigues</title>
        <meta name="description" content="Front-end developer" />
      </Head>
      <GlobalStyle />
      <Content gray={gray}>
        <Fade triggerOnce cascade duration="1000">
          {children}
        </Fade>
        <Fade triggerOnce direction="left">
          <Footer />
        </Fade>
      </Content>
    </>
  );
}