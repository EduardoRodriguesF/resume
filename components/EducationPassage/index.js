import Image from 'next/image';
import { Container, Timeline, Line, Circle, Content, Details } from './styles';

export default function EducationPassage({ children, title, date, done, src, alt }) {
  return (
    <Container>
      <Timeline>
        <Line done={done}>
          <hr/>
          <Circle done={done} />
        </Line>
      </Timeline>
      <Content>
        <Image layout="fixed" width="200" height="200" src={src} alt={alt} />  
        <Details>
          <h2>{title}</h2>
          <span>{date}</span>
          <p>{children}</p>
        </Details>
      </Content>
    </Container>
  );
}