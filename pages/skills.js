import Link from 'next/link';

import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';
import PercentageBar from '../components/PercentageBar';

import { Content, Skillset } from '../styles/pages/skills';

export default function Skills() {
  return (
    <Layout>
      <GoBackButton />
      <Content>

        <Skillset>
          <h2>Front-end</h2>
          <PercentageBar skill="CSS" fill="96" />
          <PercentageBar skill="JavaScript" fill="86" />
          <PercentageBar skill="TypeScript" fill="71" />
          <PercentageBar skill="ReactJS" fill="78" />
          <hr />
          <p>
            Since <b>2018</b> I have been studying through local and online <b>courses</b> and training my capacity with challenge and <b>problem solving</b> websites, like HackerRank and Codeacademy.
          </p>
        </Skillset>

        <Skillset>
          <h2>Softskills</h2>
          <PercentageBar skill="Resilience" fill="87" />
          <PercentageBar skill="Persistence" fill="92" />
          <PercentageBar skill="Team work" fill="82" />
          <hr />
          <p>
            The difficulties of 2020 made me learn a lot about those skills, and that translated well for my programming life. <br />
            Besides that, participating on <b>Mega Hack 5.0</b> taught me a lot about team work and persistence, as we continued doing our best even when the project feels like is falling apart.
          </p>
        </Skillset>

        <Skillset>
          <h2>Back-end</h2>
          <PercentageBar skill="Node.js" fill="68" />
          <PercentageBar skill="Postgres" fill="52" />
          <hr />
          <p>
            With <b>GoStack Bootcamp</b> I had my first deep dive into back-end development, where I learned how to make a full Restful API until deployment, using AWS.<br />
            Since I am new to it, I am not very comfortable with such area yet, but I am always willing to face it to learn more and more.
          </p>
        </Skillset>
      </Content>
      <h4>See more on <Link href="/education">Education</Link></h4>
    </Layout>
  )
}