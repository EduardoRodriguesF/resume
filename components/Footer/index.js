import { Container } from './styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const info = {
  github: 'https://github.com/EduardoRodriguesF',
  linkedin: 'https://www.linkedin.com/in/eduardo-rodrigues-4b3624190/',
  email: 'contato@edurodrigues.dev',
};

info.mailto = `mailto:${info.email}`;

export default function Footer() {
  return (
    <Container>
      <h2>Reach me!</h2>
      <div>
        <a href={info.github}><AiFillLinkedin size={32} color="#000" /></a>
        <a href={info.linkedin}><AiFillGithub size={32} color="#000" /></a>
      </div>
      <a href={info.mailto}>{info.email}</a>
    </Container>
  );
}