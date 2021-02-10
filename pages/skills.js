import Link from 'next/link';

import Layout from '../components/Layout';
import PercentageBar from '../components/PercentageBar';

import { Container, Content, Skillset } from '../styles/pages/skills';

import { skills } from '../infos.json';
const { front, soft, back } = skills;

export default function Skills() {
  return (
    <Layout>
      <Container>
        <Content>
          <Skillset>
            <h2>Front-end</h2>
            {front.map(s => <PercentageBar skill={s.name} fill={s.percent} />)}
            <hr />
            <p>
              Since <b>2018</b> I have been studying through local and online <b>courses</b> and training my capacity with challenge and <b>problem solving</b> websites, like HackerRank and Codeacademy.
            </p>
          </Skillset>

          <Skillset>
            <h2>Softskills</h2>
            {soft.map(s => <PercentageBar skill={s.name} fill={s.percent} />)}
            <hr />
            <p>
              The difficulties of 2020 made me learn a lot about those skills, and that translated well for my programming life. <br />
              Besides that, participating on <b>Mega Hack 5.0</b> taught me a lot about team work and persistence, as we continued doing our best even when the project feels like is falling apart.
            </p>
          </Skillset>

          <Skillset>
            <h2>Back-end</h2>
            {back.map(s => <PercentageBar skill={s.name} fill={s.percent} />)}
            <hr />
            <p>
              With <b>GoStack Bootcamp</b> I had my first deep dive into back-end development, where I learned how to make a full Restful API until deployment, using AWS.<br />
              Since I am new to it, I am not very comfortable with such area yet, but I am always willing to face it to learn more and more.
            </p>
          </Skillset>
        </Content>
        <h4>See more on <Link href="/education">Education</Link></h4>
      </Container>
    </Layout>
  )
}