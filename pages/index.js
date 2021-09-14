import Layout from '../components/Layout';
import Image from 'next/image';
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';

const name = 'Eduardo Rodrigues';

import { projects } from '../infos.json';

import { Header, Content, CardContainer, ProjectsContainer, ProjectsHeader } from '../styles/pages/home';

export default function Home() {
  return (
    <Layout>
      <Header>
        <Image src="/me.jpg" alt="me" width="200" height="200" />
        <h1>{name}</h1>
        <p>Front-end developer</p>
      </Header>
      <Content>
        <CardContainer>
          <Card title="Skills" description="My competences and technologies I use." to="/skills" />
          <Card title="Education" description="Where and how I've been studying." to="/education" />
          <Card title="Experience" description="Previous jobs and projects." to="/experience" />
        </CardContainer>
        <ProjectsContainer>
          <ProjectsHeader>
            <h2>Projects</h2>
          </ProjectsHeader>
          <CardContainer>
            {projects.map(p => <ProjectCard title={p.title} description={p.description} tags={p.tags} to={p.link} />)}
          </CardContainer>
        </ProjectsContainer>
      </Content>
    </Layout>
  );
}