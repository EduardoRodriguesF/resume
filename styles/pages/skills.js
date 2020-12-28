import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 24px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Skillset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  margin: 36px;

  div + div {
    margin-top: 6px;
  }

  hr {
    border: 2px solid #e7e7e7;
    border-radius: 2px;
    width: 50%;
    margin: 24px 0;
  }

  > p {
    font-size: 16px;
    text-align: justify;
  }

  br {
    content: "";
    display: block;
    margin: 6px;
    line-height: 6px;
  }
`;