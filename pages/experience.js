import Image from 'next/image';

import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';

import { Content } from '../styles/pages/experience';

export default function Experience() {
  return (
    <Layout>
      <GoBackButton />
      <Content>
        <Image width="240" height="43" src="/liveu.webp" alt="Live University" />
        <h3><b>Freelance • </b>March 2019 – April 2019</h3>
        <p>
          In the short period of a month, I developed a <b>calendar</b> for students' schedule using JavaScript and EJS integrating Node.js. 
          Also helped in the tool to generate certificates, which I was responsible for making the certificate's
          HTML and searching a library to handle its transpilation to PDF.
        </p>
      </Content>
    </Layout>
  );
}