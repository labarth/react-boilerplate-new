import styled from 'styled-components';

export const StyledSelect = styled.select`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 0;
  border-radius: 0;
  background: #e6e6e6;
  color: #7b7b7b;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
`;
export const StyledSelectWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    width: 100%;
`;

export const StyledArrow = styled.div`
  position: absolute;
  top: 16px;
  right: 15px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: #7b7b7b transparent transparent transparent;
`;
