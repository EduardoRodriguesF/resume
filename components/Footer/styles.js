import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 36px;
  margin-top: 32px;

  h2 {
    margin-bottom: 12px;
  }

  div {
    a + a {
      margin-left: 4px;
    }
  }
`;