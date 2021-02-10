import { Container, Percentage, Bar, Filled } from './styles';

export default function PercentageBar({ skill, fill }) {
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