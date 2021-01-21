import { Container } from './styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import { links } from '../../infos.json';

const mailto = `mailto:${links.email}`;

export default function Footer() {
  return (
    <Container>
      <div>
        <a href={links.github}><AiFillGithub size={32} color="#000" /></a>
        <a href={links.linkedin}><AiFillLinkedin size={32} color="#000" /></a>
      </div>
      <a href={mailto}>{links.email}</a>
    </Container>
  );
}