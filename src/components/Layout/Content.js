import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledContent } from './Styled';

class Content extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  render() {
    return (
      <StyledContent>{this.props.children}</StyledContent>
    );
  }
}

export { Content };
