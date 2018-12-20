import styled from 'styled-components';

export const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
`;

export const StyledIndicator = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  
  :after {
    content: '';
    position: absolute;
    display: none;
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const StyledInputCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  
  &:checked ~ ${StyledIndicator}{
    background: #2aa1c0;
    
    :after {
      display: block;
    }
  }
`;