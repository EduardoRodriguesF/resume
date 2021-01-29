import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props => props.gray ? '#F0EDF5' : '#fff')}
`;