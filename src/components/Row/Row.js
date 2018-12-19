import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from './Styled';

class Row extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <StyledRow>
        {this.props.children}
      </StyledRow>
    );
  }
}

export { Row };
