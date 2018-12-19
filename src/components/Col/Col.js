import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './Styled';

class Col extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  };

  render() {
    return (
      <StyledCol>
        {this.props.children}
      </StyledCol>
    );
  }
}

export { Col };
