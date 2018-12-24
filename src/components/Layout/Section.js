import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './Styled';

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  };

  render() {
    return (
      <StyledSection>{this.props.children}</StyledSection>
    );
  }
}

export { Section };
