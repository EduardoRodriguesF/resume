import Layout from '../components/Layout';
import Image from 'next/image';
import Card from '../components/Card';

const name = 'Eduardo Rodrigues';

import { Header, Content, CardContainer } from '../styles/pages/home';

export default function Home() {
  return (
    <Layout>
      <Header>
        <Image src="/me.jpeg" alt="me" width="200" height="200" />
        <h1>{name}</h1>
        <p>Front-end developer</p>
      </Header>
      <Content>
        <CardContainer>
          <Card title="Skills" description="My competences and technologies I use." to="/skills" />
          <Card title="Education" description="Where and how I've been studying." to="/education" />
          <Card title="Experience" description="Previous jobs and projects." to="/experience" />
        </CardContainer>
      </Content>
    </Layout>
  );
}