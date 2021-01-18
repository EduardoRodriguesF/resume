import styled from 'styled-components';

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 64px;
  padding: 0;

  ul { 
    margin: 0;
  }

  @media screen and (max-width: 760px) {
    display: block;
  }
`;