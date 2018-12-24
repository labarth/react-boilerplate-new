import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledFooter } from './Styled';

class Footer extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  render() {
    return (
      <StyledFooter>{this.props.children}</StyledFooter>
    );
  }
}

export { Footer };
