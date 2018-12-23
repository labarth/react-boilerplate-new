import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, StyledInputCheckbox, StyledIndicator } from './Styled';

class Checkbox extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    name: '',
    label: '',
    onChange: Function.prototype,
  };

  render() {
    const { name, onChange, label } = this.props;

    return (
      <StyledCheckbox>
        {label}
        <StyledInputCheckbox
          type="checkbox"
          name={name}
          onChange={onChange}
          defaultChecked={false}
        />
        <StyledIndicator />
      </StyledCheckbox>
    );
  }
}

export { Checkbox };
