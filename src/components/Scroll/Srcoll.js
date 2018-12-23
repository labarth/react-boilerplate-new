import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledScroll } from './Styled';

class Scroll extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  render() {
    return (
      <StyledScroll>{this.props.children}</StyledScroll>
    );
  }
}

export { Scroll };
