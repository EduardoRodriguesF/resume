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

  div {      
    & + div { 
      margin-top: 86px;
    }

    h3 {
      font-weight: 400;
      color: #888896;

      b {
        color: #222;
      }
    }

    p {
      text-align: justify;
      margin-top: 12px;
      color: #222;

      a {
        img {
          min-width: 250px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 760px) {
    display: block;
    font-size: 12px;
  }
`;