import styled from 'styled-components';

export const Container = styled.div`
  max-width: 240px;
  border: 1px solid #7a7a7a;
  border-radius: 12px;
  padding: 18px 24px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #0070f3;
    color: #0070f3;
    transform: translateY(-2px);
    box-shadow: 0 2px 6px -4px #0070f3;
  }
`;