import Image from 'next/image';

import { Container } from './styles';

export default function Avatar() {
  return (
    <Container>
      <Image src="/me.jpeg" alt="me" width="200" height="200" />
    </Container>
  );
}