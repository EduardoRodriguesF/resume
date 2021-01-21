import Image from 'next/image';

import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';

import { Content } from '../styles/pages/experience';

const team = {
  ferrari: {
    name: 'Luís Ferrari',
    link: 'https://www.linkedin.com/in/luisdferrari/',
  },
  lucca: {
    name: 'Lucca Dias',
    link: 'https://www.linkedin.com/in/lucca-dias-a09b61113/',
  },
  amanda: {
    name: 'Amanda Zanatta',
    link: 'https://www.linkedin.com/in/amanda-zanatta-30a87a119/',
  },
  luiz: {
    name: 'Luiz Araujo',
    link: 'https://www.linkedin.com/in/araujoluiz/',
  },
}

export default function Experience() {
  return (
    <Layout>
      <Content>
        <section>
          <Image width="240" height="43" src="/liveu.webp" alt="Live University" />
          <h3><b>Freelance • </b>March 2019 – April 2019</h3>
          <p>
            In the short period of a month, I developed a <b>calendar</b> for students' schedule using JavaScript and EJS integrating Node.js. 
            Also helped in the tool to generate certificates, which I was responsible for making the certificate's
            HTML and searching a library to handle its transpilation to PDF.
          </p>
        </section>
        <section>
          <Image width="142" height="90" src="/firstrocket.svg" alt="First Rocket"/>
          <h3><b>Mega Hack 5.0 • </b>November 2020</h3>
          <p>
            During the 5th edition of the hackaton, I participated in the development of <b>First Rocket</b>.
            The project aims to educate future <b>businessmen</b> willing to create a <b>startup</b>, 
            but does not know where to start. <br/><br/>
            You can see more details on the Github repository README file: <br/><br/>

            <a href="https://github.com/EduardoRodriguesF/first-rocket">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=EduardoRodriguesF&repo=first-rocket" />
            </a>
            <br/>

            As we're talking about a <b>hackaton</b>, I did not work alone! These are my team members: <br/>
            <ul>
              <li><a href={team.ferrari.link}>{team.ferrari.name}</a> (Front-end)</li>
              <li><a href={team.lucca.link}>{team.lucca.name}</a> (Back-end)</li>
              <li><a href={team.amanda.link}>{team.amanda.name}</a> (UX/UI)</li>
              <li><a href={team.luiz.link}>{team.luiz.name}</a> (MKT)</li>
            </ul>
          </p>
        </section>
      </Content>
    </Layout>
  );
}