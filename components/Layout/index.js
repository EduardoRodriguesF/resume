import GlobalStyle from '../../styles/global';

import Footer from '../Footer';

import { Content } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}