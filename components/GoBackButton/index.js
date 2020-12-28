import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi'

import { Container } from './styles';

export default function GoBackButton() {
  return (
    <Container>
      <Link href="/">
        <FiArrowLeft size={36} color="#a0a0a0" />
      </Link>
    </Container>
  )
}