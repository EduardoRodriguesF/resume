import { Fade } from "react-awesome-reveal";

import { Container } from './styles';

export default function TimePassage({ children, done }) {
  return (
    <Container done={done}> 
      <Fade triggerOnce direction="down">
        <div>
          {children}
        </div>
      </Fade>
    </Container>
  );
}