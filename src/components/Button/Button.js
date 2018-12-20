import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styled';

class Button extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string]),
    type: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    name: null,
    children: null,
    type: null,
    disabled: false,
    onClick: Function.prototype,
  };

  render() {
    const { name, disabled, children, type, onClick } = this.props;
    return (
      <StyledButton
        name={name}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  }
}

export { Button };
