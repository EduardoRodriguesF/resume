import styled from 'styled-components';

export const Content = styled.div`
  max-width: 800px;
  min-height: 60vh;
  padding: 24px;
  margin-top: 52px;

  section {  
    & + section { 
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
          min-width: 300px;
        }
      }
    }
  }
`;