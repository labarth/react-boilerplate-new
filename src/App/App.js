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

  state = {
    userName: '',
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ userName: user.username }));
  }

  handleClick = () => {
    this.props.addTodo('popopsska');
  }


  render() {
    return (
      <StyledApp>
        <button type="button" onClick={this.handleClick}>OK</button>
        {this.state.userName}
      </StyledApp>
    );
  }
}

export default App;
