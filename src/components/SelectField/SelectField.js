import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { StyledArrow, StyledSelect, StyledSelectWrapper } from './Styled';

class SelectField extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    source: PropTypes.instanceOf(List),
  };

  static defaultProps = {
    name: null,
    source: [],
    onChange: Function.prototype,
  };

  render() {
    const { name, onChange, source } = this.props;

    return (
      <StyledSelectWrapper>
        <StyledSelect
          name={name}
          onChange={onChange}
        >
          {source.map((option) => (
            <option key={option.get('value')} value={option.value}>{option.get('label')}</option>))}
        </StyledSelect>
        <StyledArrow />
      </StyledSelectWrapper>
    );
  }
}

export { SelectField };
