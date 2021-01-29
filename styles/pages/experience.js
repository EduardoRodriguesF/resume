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

  div {  
    & + div { 
      margin-top: 86px;
    }

    h3 {
      font-weight: 400;
      color: #555;

      b {
        color: #000;
      }
    }

    p {
      text-align: justify;
      margin-top: 12px;

      a {
        img {
          min-width: 250px;
        }
      }
    }
  }
`;