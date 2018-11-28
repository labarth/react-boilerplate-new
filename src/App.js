import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-size: 26px;
  line-height: 36px;
  text-align: center;
`

class App extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <StyledApp>Hello world</StyledApp>
    );
  }
}

export { App };
