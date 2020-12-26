import { Container } from './styles';

export default function Card({ title, description }) {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
}