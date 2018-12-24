import styled from 'styled-components';

export const StyledItem = styled.li`
  position: relative;
  padding: 8px;
  background-color: #fff;
  border-radius: 0 4px 4px 0;
  max-width: 300px;
  margin-bottom: 18px;
  
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
