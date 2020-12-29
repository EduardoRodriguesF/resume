import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 24px;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    border: 2px solid #000;
    width: 1px;
    height: 100px;
    padding: 0;
    margin: 0;
  }
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  background: #000;
  border-radius: 6px;
`;

