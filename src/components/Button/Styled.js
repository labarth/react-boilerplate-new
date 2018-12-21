import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #e6e6e6;
  border: none;
  padding: 6px 14px;
  opacity: ${(props) => props.disabled && 0.5};
  pointer-events: ${(props) => props.disabled && 'none'};
  
  :hover {
    background-color: #c6c6c6;
    cursor: pointer;
  }
`;
