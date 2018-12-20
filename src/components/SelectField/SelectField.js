import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledArrow, StyledSelect, StyledSelectWrapper } from './Styled';

class SelectField extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    source: PropTypes.array,
    value: PropTypes.string,
  };

  static defaultProps = {
    name: null,
    defaultValue: null,
    value: null,
    source: [],
    onChange: Function.prototype,
  };

  render() {
    const { name, onChange, defaultValue, source, value } = this.props;
    return (
      <StyledSelectWrapper>
        <StyledSelect
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
        >
          {source.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </StyledSelect>
        <StyledArrow />
      </StyledSelectWrapper>
    );
  }
}

export { SelectField };
