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
    color: #0070f3;
    transform: translateY(-2px);
    box-shadow: 0 2px 6px -4px #0070f3;
    text-decoration: none;
  }

  h3 {
    color: #222;
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
  border: 1px solid #0070f3;
  border-radius: 100px;
  padding: 4px 8px;

  & + span {
    margin-left: 5px;
  }
`;