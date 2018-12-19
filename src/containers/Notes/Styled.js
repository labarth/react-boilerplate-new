import styled from 'styled-components';

export const StyledItem = styled.li`
  position: relative;
  padding-left: 8px;
  
  :after {
    content: '';
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: ${(props) => (props.isInc ? 'green' : 'red')};
    position: absolute;
  }
`;

export const StyledCol = styled.div`
  min-width: 100px;
`;
