import Link from 'next/link';
import Image from 'next/image';

import { FiAward, FiCalendar } from 'react-icons/fi';

import Layout from '../components/Layout';

import { Content, CardCourse, CardCover, CardContent } from '../styles/pages/education';

export default function Education() {
  return (
    <Layout>
      <Content>
        <CardCourse>
          <CardCover>
            <Image src="/infocurso.png" width="128" height="128"/>
          </CardCover>
          <CardContent>
            <h2>Webdesign course</h2>
            <span><FiCalendar size={18} /> 2018 – 2019</span>
            <p>
              This was not my first contact with programming, but represents the time I decided to take it seriously as my <b>career</b>. 
              Although being mainly fundamentals on <b>HTML</b> and <b>CSS</b>, it also taught me about <b>Adobe Photoshop</b> and <b>Google Webdesign</b> (besides I don't use it daily).<br /><br />
              But as I was studying more advanced subjects alongside the course, what I really engaged to in it was my teacher's stories and tips on his main job as front-end on Carrefour.
            </p>
          </CardContent>
        </CardCourse>
        <CardCourse>
          <CardCover>
            <Image src="/gostack.png" width="128" height="128"/>
          </CardCover>
          <CardContent>
            <h2>FullStack course</h2>
            <span><FiCalendar size={18} />2020</span>
            <p>
              As I continued to study more and more, exploring all sorts of courses via Udemy and other websites like that, I ended up participating on <b>Next Level Week #3</b>, where I developed a simple orphanage finding page called <a href="https://github.com/EduardoRodriguesF/happy">Happy</a>.
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
            </p>
          </CardContent>
        </CardCourse>
        <CardCourse>
          <CardCover>
            <Image src="/unisanta.jpeg" width="128" height="128"/>
          </CardCover>
          <CardContent>
            <h2>Information Systems (Bachelor)</h2>
            <span><FiCalendar size={18} /> 2021 – 2025</span>
            <p>
              Studying at <b>Unisanta</b> University since February.
            </p>
          </CardContent>
        </CardCourse>
      </Content>
    </Layout>
  );
}