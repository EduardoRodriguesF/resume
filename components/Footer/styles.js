import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 36px;

  h2 {
    margin-bottom: 12px;
  }

  div {
    a + a {
      margin-left: 4px;
    }
  }
`;