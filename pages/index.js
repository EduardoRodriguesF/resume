import Layout from '../components/Layout';
import Avatar from '../components/Avatar';
import Card from '../components/Card';

import { Header, Content } from '../styles/pages/home';

const name = 'Eduardo Rodrigues';

export default function Home() {
  return (
    <Layout>
      <Header>
        <Avatar />
        <h1>{name}</h1>
        <p>Front-end developer</p>
      </Header>
      <Content>
        <Card title="Skills" description="My competences and technologies I use." />
        <Card title="Education" description="Where and how I've been studying." />
        <Card title="Experience" description="My previous jobs and projects." />
      </Content>
    </Layout>
  );
}