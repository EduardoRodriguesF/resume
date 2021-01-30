import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 64px;
  padding: 64px 0;
`;

export const CardCourse = styled.div`
  position: relative;
  display: flex;
  max-width: 900px;

  & + div {
    margin-top: 64px;
  }

  @media (max-width: 1024px) {
    width: 100vw;
    padding: 0 24px;
  }
`;

export const CardCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: absolute;
  margin-top: 28px;
  width: 92px;
  height: 92px;
  border-radius: 100px;
  overflow: hidden;

  img {
    width: 92px;
  }

  @media (max-width: 640px) {
    margin-left: 32px;
  }

  @media (max-width: 470px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: #fff;
  padding: 32px;
  margin-left: 46px;
  text-align: justify;

  h2, span {
    margin-left: 46px;
  }

  span {
    display: flex;
    align-items: center;
    color: #888896;
    margin-bottom: 24px;
    
    svg {
      margin-right: 8px;
    }
  }

  @media (max-width: 640px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2, span {
      margin-left: calc(32px + 64px + 24px);
      text-align: center;
    }
  }
  
  @media (max-width: 470px) {
    h2, span {
      margin-left: 0;
    }

    h2 {
      margin-top: calc(64px + 32px);
    }
  }
`;

