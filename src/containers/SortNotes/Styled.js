import styled from 'styled-components';
import { SORT_DATE_ASC } from 'contstants/constants';

export const StyledArrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => (props.type === SORT_DATE_ASC ? 'rotate(45deg)' : 'rotate(-135deg)')};
`;

export const StyledSort = styled.div`
  display: inline-flex;
`;

export const StyledText = styled.div`
  margin-right: 6px;
`;

export const StyledItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
