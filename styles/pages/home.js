import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 24px 0;

  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 100px;
    overflow: hidden;
  }

  h1 {
    margin-top: 14px;

    @media screen and (max-width: 420px) {
      font-size: 28px;
    }
  }

  p {
    color: #696972;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

export const CardContainer = styled.div`
  max-width: 1000px;
  margin: 1.4rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;

  div, a {
    flex: 1 1 30%;
    height: auto;
  }

  div + div {
    margin-left: 12px;
  }

  @media (max-width: 760px) {
    flex-direction: column;

    div + div  {
      margin-left: 0;
      margin-top: 12px;
    }
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 1.4rem 0 3rem;
  padding: 0 12px;

  a {
    margin: 6px 6px;
  }
`;

export const ProjectsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;