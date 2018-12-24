import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './Styled';

class Header extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  render() {
    return (
      <StyledHeader>{this.props.children}</StyledHeader>
    );
  }
}

export { Header };
