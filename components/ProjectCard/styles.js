import styled from 'styled-components';

export const Container = styled.a`
  max-width: 400px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 18px 24px 22px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    border-color: #0070f3;
    transform: translateY(-2px);
    box-shadow: 0 2px 6px -4px #0070f3;
    text-decoration: none;

    h3 {
      color: #0070f3;
    }
  }

  h3 {
    color: #222;
    transition: color 0.3s;
  }

  p {
    color: #696972;
    font-size: 16px;
  }
`;

export const TagContainer = styled.div`
  width: 100%;
  margin-top: 12px;
`;

export const Tag = styled.span`
  font-size: 12px;
  color: #0070f3;
  background-color: #def;
  border-radius: 100px;
  padding: 4px 10px;

  & + span {
    margin-left: 6px;
  }
`;