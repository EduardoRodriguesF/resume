import Image from 'next/image';

import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';
import TimePassage from '../components/TimePassage';

import { Content } from '../styles/pages/experience';

import { team } from '../infos.json';

export default function Experience() {
  return (
    <Layout>
      <Content>
        <TimePassage done>
          <Image width="240" height="43" src="/liveu.webp" alt="Live University" />
          <h3><b>Freelance • </b>March 2019 – April 2019</h3>
          <p>
            In the short period of a month, I developed a <b>calendar</b> for students' schedule using JavaScript and EJS integrating Node.js. 
            Also helped in the tool to generate certificates, which I was responsible for making the certificate's
            HTML and searching a library to handle its transpilation to PDF.
          </p>
        </TimePassage>
        <TimePassage done>
          <Image width="142" height="90" src="/firstrocket.svg" alt="First Rocket" />
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
              {team.map(m => <li><a href={m.link}>{m.name}</a> ({m.role})</li>)}
            </ul>
          </p>
        </TimePassage>
      </Content>
    </Layout>
  );
}