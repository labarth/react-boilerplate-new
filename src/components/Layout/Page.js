import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledPage } from './Styled';

class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  render() {
    return (
      <StyledPage>{this.props.children}</StyledPage>
    );
  }
}

export { Page };
