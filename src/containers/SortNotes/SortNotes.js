import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledArrow, StyledSort, StyledText } from './Styled';

class SortNotes extends PureComponent {
  static propTypes = {};

  static defaultProps = {};


  handleClick = () => {

  }

  render() {
    return (
      <StyledSort handleClick={this.handleClick}>
        <StyledText>Сортировать по дате</StyledText>
        <StyledArrow />
      </StyledSort>
    );
  }
}

export { SortNotes };
