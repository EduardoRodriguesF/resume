import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 64px 0;

  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 0 100px 100px 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 800px;
  margin-left: 24px;

  span {
    color: #555;
  }

  p {
    margin-top: 12px;
    text-align: justify;
    color: #222;
  }
`;

export const Timeline = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  hr {
    position: absolute;
    border: 2px solid ${({ done }) => done ? '#0070f3' : '#c7c7c7'};
    background-color: ${({ done }) => done ? '#0070f3' : '#c7c7c7'};
    width: 1px;
    height: 102%;
    padding: 0;
    margin: 0;
    border-radius: 50px;
  }
`;

export const TimeLabel = styled.span`
  width: 120px;
  padding-right: 20px;
  text-align: right;
  color: #757575;
  font-weight: 300;
`;

export const Circle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ done }) => done ? '#0070f3' : '#c7c7c7'};
  border-radius: 5px;
`;

