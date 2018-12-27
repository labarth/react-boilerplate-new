import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, StyledInputCheckbox, StyledIndicator } from './Styled';

class Checkbox extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    label: '',
    checked: false,
    onChange: Function.prototype,
  };

  render() {
    const { name, onChange, label, checked } = this.props;

    return (
      <StyledCheckbox>
        {label}
        <StyledInputCheckbox
          type="checkbox"
          name={name}
          onChange={onChange}
          checked={checked}
        />
        <StyledIndicator />
      </StyledCheckbox>
    );
  }
}

export { Checkbox };
