import Image from 'next/image';

import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';
import EducationPassage from '../components/EducationPassage';

import { Content } from '../styles/pages/education';

export default function Education() {
  return (
    <Layout>
      <GoBackButton />
      <Content>
        <EducationPassage title="Information Systems" date="2021 – 2025" src="/unisanta.jpeg" alt="Unisanta">

        </EducationPassage>
        <EducationPassage title="Fullstack course" date={2020} done src="/gostack.png" alt="Gostack Bootcamp">

        </EducationPassage>
        <EducationPassage title="Webdesign course" date="2018 – 2019" done src="/infocurso.png" alt="Infocurso">
          This was not my first contact with programming, but represents the time I decided to take it seriously as my <b>career</b>. 
          Although being mainly fundamentals on <b>HTML</b> and <b>CSS</b>, it also taught me about <b>Adobe Photoshop</b> and <b>Google Webdesign</b> (besides I don't use it daily).<br />
          But as I was studying more advanced subjects alongside the course, what I really engaged to in it was my teacher's stories and tips on his main job as front-end on Carrefour.
        </EducationPassage>
      </Content>
    </Layout>
  );
}