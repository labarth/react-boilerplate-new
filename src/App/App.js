import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../rootReducer';

const StyledApp = styled.div`
  font-size: 26px;
  line-height: 36px;  
  text-align: center;
  color: red;
`;

const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch(addTodo(data)),
})

@connect(null, mapDispatchToProps)
class App extends PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleClick = () => {


    this.props.addTodo('popopsska');
  }

  render() {
    return (
      <StyledApp>
        <button type="button" onClick={this.handleClick}>OK</button>
      </StyledApp>
    );
  }
}

export default App;
