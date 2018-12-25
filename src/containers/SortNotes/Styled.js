import styled from 'styled-components';

export const StyledArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const StyledSort = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  
  :hover {
    color: #7f7f7f;
  }
`;

export const StyledText = styled.div`
  margin-right: 6px;
`;
