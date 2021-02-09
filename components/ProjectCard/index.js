import Link from 'next/link';
import { Container, TagContainer, Tag } from './styles';

export default function Card({ title, description, tags, to }) {
  return (
    <Container href={to} target="_blank">
      <h3>{title}</h3>
      <p>{description}</p>
      <TagContainer>
        {tags.map(t => <Tag>{t}</Tag>)}
      </TagContainer>
    </Container>
  );
}