import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  h1 {
    margin-top: 14px;
  }

  p {
    color: #555;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  margin-bottom: 24px;
  display: flex;  
`;