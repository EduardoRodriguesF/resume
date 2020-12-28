import Link from 'next/link';
import { Container } from './styles';

export default function Card({ title, description, to }) {
  return (
      <Link href={to}>
        <Container>
          <h3>{title}</h3>
          <p>{description}</p>
        </Container>
      </Link>
  );
}