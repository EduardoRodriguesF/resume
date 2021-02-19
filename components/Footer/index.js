import { Container } from './styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';

import { links } from '../../infos.json';

const mailto = `mailto:${links.email}`;

export default function Footer() {
  return (
    <Container>
      <div>
        <a target="_blank" href={links.github}><AiFillGithub size={32} color="#222" /></a>
        <a target="_blank" href={links.linkedin}><AiFillLinkedin size={32} color="#222" /></a>
        <a target="_blank" href={links.itchio}><FaItchIo size={32} color="#222" /></a>
      </div>
      <a href={mailto}>{links.email}</a>
    </Container>
  );
}