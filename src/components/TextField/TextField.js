import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Styled.js';

class TextField extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    name: null,
    type: 'text',
    disabled: false,
    onChange: Function.prototype,
  };

  render() {
    const { name, type, disabled, onChange } = this.props;

    return (
      <StyledInput
        name={name}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
}

export { TextField };
