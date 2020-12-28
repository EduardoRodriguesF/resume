import { Container, Percentage, Bar, Filled } from './styles';

export default function PercentageBar({ skill, fill }) {
  function getPercentage() {
    const element = document.getElementById('bar');

    return element.style.width;
  }

  return (
    <Container>
      <p>{skill}</p>
      <Percentage>
        <Bar>
          <Filled fill={fill} />
        </Bar>
        <p>{fill}%</p>
      </Percentage>
    </Container>
  )
}