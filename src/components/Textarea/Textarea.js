import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea } from './Styled';

class Textarea extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    placeholder: null,
    name: null,
    disabled: false,
    onChange: Function.prototype,
  };

  render() {
    const { name, disabled, onChange, placeholder, value } = this.props;

    return (
      <StyledTextarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
    );
  }
}

export { Textarea };
