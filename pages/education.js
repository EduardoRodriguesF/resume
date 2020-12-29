import Link from 'next/link';

import { FiAward } from 'react-icons/fi';

import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';
import EducationPassage from '../components/EducationPassage';

import { Content } from '../styles/pages/education';

export default function Education() {
  return (
    <Layout>
      <GoBackButton />
      <Content>
        <EducationPassage title="Information Systems (Bachelor)" date="2021 – 2025" src="/unisanta.jpeg" alt="Unisanta">
          Starting on February 5, I will be studying at Unisanta University. 
        </EducationPassage>
        <EducationPassage title="Fullstack course" date={2020} done src="/gostack.png" alt="Gostack Bootcamp">
          As I continued to study more and more, exploring all sorts of courses via Udemy and other websites like that, I ended up participating on <b>Next Level Week #3</b>, where I developed a simple orphanage finding page.
          After that, I got interested in the paid course Gostack, where I have been studying until some weeks ago and learned a lot about: <br /> 
          <ul>
            <li>TypeScript</li>
            <li>Advanced JavaScript</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>Amazon AWS and S3</li>
            <li>ESLint/Prettier for code patterns</li>
          </ul>
          <a href="https://github.com/EduardoRodriguesF/gobarber">GoBarber</a>, the app developed thoughout the course, is a full application on web and mobile, so the list goes on and on.
          The bootcamp covered all the way from scratch to deploy, giving me the knowledge required to work on real life services and provide maintence.<br/><br />
          Not stopping there, the course is constantly getting updates. Rocketseat announced a revamped course, <b>Ignite</b>, in <b>March 2021</b>, which I am already excited to take.
          <br/><br/><FiAward size={16} /> <Link href="/gostack-certificate.pdf">Certificate</Link>
        </EducationPassage>
        <EducationPassage title="Webdesign course" date="2018 – 2019" done src="/infocurso.png" alt="Infocurso">
          This was not my first contact with programming, but represents the time I decided to take it seriously as my <b>career</b>. 
          Although being mainly fundamentals on <b>HTML</b> and <b>CSS</b>, it also taught me about <b>Adobe Photoshop</b> and <b>Google Webdesign</b> (besides I don't use it daily).<br /><br />
          But as I was studying more advanced subjects alongside the course, what I really engaged to in it was my teacher's stories and tips on his main job as front-end on Carrefour.
        </EducationPassage>
      </Content>
    </Layout>
  );
}