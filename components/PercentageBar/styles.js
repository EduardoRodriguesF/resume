import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  p {
    color: #333;
  }
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    line-height: 0;
  }
`;

export const Bar = styled.div`
  display: flex;
  flex: 1;
  width: 280px;
  height: 12px;
  background-color: #e8e8e8;
  border-radius: 6px;
  margin-right: 12px;
`;

const fillUp = (props) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${props.fill}%;//
  }
`;

export const Filled = styled.div`
  ${(props) => css`width: ${props.fill}%;`}
  animation: 2s ${fillUp} ease-out;
  height: 12px;
  background-color: #0070f3;
  border-radius: 6px;
`;