import GlobalStyle from '../../styles/global';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <div>{children}</div>
    </>
  );
}