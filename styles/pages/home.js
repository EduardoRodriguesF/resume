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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

export const CardContainer = styled.div`
  max-width: 800px;
  margin: 2rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;

  div {
    flex: 1 1 45%;
    height: 130px;
  }

  div + div {
    margin-left: 12px;
  }
`;