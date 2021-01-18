import Head from 'next/head';
import { Fade } from "react-awesome-reveal";

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
      <Content>
        <Fade triggerOnce direction="left" cascade>
          {children}
        </Fade>
      </Content>
      <Fade triggerOnce direction="up">
        <Footer />
      </Fade>
    </>
  );
}