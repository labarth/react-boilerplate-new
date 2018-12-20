import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './Styled';

class TextField extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    name: null,
    placeholder: null,
    type: 'text',
    disabled: false,
    onChange: Function.prototype,
  };

  render() {
    const { name, type, disabled, onChange, placeholder } = this.props;

    return (
      <StyledInput
        name={name}
        type={type}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }
}

export { TextField };
