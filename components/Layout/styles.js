import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity 1;
  }
`;

export const Content = styled.div`
  position: relative;
  animation: .6s ${fadeIn} ease-out;
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
`;