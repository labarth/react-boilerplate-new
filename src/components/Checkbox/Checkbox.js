import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, StyledInputCheckbox } from './Styled';

class Checkbox extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    name: null,
    onChange: Function.prototype,
  };

  render() {
    const { name, onChange } = this.props;

    return (
      <StyledCheckbox>
        <StyledInputCheckbox
          type="checkbox"
          name={name}
          onChange={onChange}
          defaultChecked={false}
        />
        <label htmlFor="" />
      </StyledCheckbox>
    );
  }
}

export { Checkbox };
