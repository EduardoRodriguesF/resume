import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

import { Container } from './styles';

export default function EducationPassage({ children, title, date, done, src, alt }) {
  return (
    <Container> 
      <Fade triggerOnce direction="down">
        <div>
          <h2>{title}</h2>
          <span>{date}</span>
          <p>{children}</p>
        </div>
      </Fade>
    </Container>
  );
}