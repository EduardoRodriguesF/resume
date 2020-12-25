import Layout from '../components/Layout';
import Avatar from '../components/Avatar';

import { Header } from '../styles/pages/home';

const name = 'Eduardo Rodrigues';

export default function Home() {
  return (
    <Layout>
      <Header>
        <Avatar />
        <h1>{name}</h1>
        <p>Front-end developer</p>
      </Header>
    </Layout>
  );
}