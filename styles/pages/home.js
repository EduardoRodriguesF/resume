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
  max-width: 800px;
  min-height: 285px;
  margin-bottom: 24px;
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