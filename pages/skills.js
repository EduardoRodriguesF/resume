import Layout from '../components/Layout';
import GoBackButton from '../components/GoBackButton';
import PercentageBar from '../components/PercentageBar';

export default function Skills() {
  return (
    <Layout>
      <GoBackButton />
      <h1>Skills</h1>
      <PercentageBar skill="CSS" fill="90" />
      <PercentageBar skill="JavaScript" fill="85" />
      <PercentageBar skill="TypeScript" fill="74" />
      <PercentageBar skill="React" fill="76" />
      <PercentageBar skill="Node.js" fill="68" />
    </Layout>
  )
}