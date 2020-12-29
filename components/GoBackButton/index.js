import { FiArrowLeft } from 'react-icons/fi'

import { Container } from './styles';

export default function GoBackButton() {
  return (
    <Container>
      <a href="javascript:history.back()">
        <FiArrowLeft size={36} color="#a0a0a0" />
      </a>
    </Container>
  )
}