import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;
  position: relative;
  width: 5px;
  padding-top: 64px;
  background: #0070F3;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -1px;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    border-radius: 15px;
    background: inherit;
  }

  > div { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative; 
    width: 400px;
    padding: 15px 32px;
    background: #fff;
    border: 2px solid #0070F3;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;

    h2 {
      font-size: 1.2rem;
    }
  
    span {
      color: #333;
    }

    p {
      margin-top: 18px;
      text-align: justify;
      font-size: 0.8rem;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 3px;
      width: 24px;
      height: 2px;
      background: #0070F3;
    }
  }

  &:nth-child(even) > div {
    left: -420px;
    
    &::before {
      right: -24px;
    }
  }

  &:nth-child(odd) > div {
    margin-left: 24px;  
      
    &::before {
      left: -24px;
    }
  }

  @media screen and (max-width: 920px) {
    > div {
      max-width: 325px;
    }

    &:nth-child(even) > div {
      left: -345px;
    }
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
      visibility: hidden;
    }

    > div {
      width: calc(100vw - 64px);
    }
    
    &:nth-child(odd) > div {
      margin-left: 0;
    }

    &:nth-child(even) > div {
      left: 0px;
    }

    > div::before {
      visibility: hidden;
    }
  }
`;
